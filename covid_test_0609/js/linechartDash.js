let pasthoveredDate;

function lineChartDash(data,dataDaily,msa,div,type, timeEndbyUser){
 let timeEnd = d3.timeParse('%Y-%m-%d')(timeEndbyUser);
 let timeStart = subtractDays(timeEnd,90);
 // store msa value that user selected
 store.msa = msa;

 // filter dataset by selected msa area
 const dataFiltered = data.filter(d=>d['MSA']===msa)[0];
 const dataFilteredDaily = dataDaily.filter(d=>d['MSA']===msa)[0];


 // transform the dataset for d3 visualization
 let dataTransformed = caseDataPrep(dataFiltered, timeStart, timeEnd);
 let dataTransformedDaily = caseDataPrep(dataFilteredDaily,timeStart,timeEnd);

 // calculate maximum of cases or deaths and date
 let maxCase = d3.max(dataTransformed.map(d=>d.cases));
 let maxCaseDaily = d3.max(dataTransformedDaily.map(d=>d.cases));
 const maxDate = dataTransformedDaily.filter(d=>d.cases===maxCaseDaily)[0]['date'];

 // set the margin of the visualization
 const margin = {top:140, right: 60, bottom: 120, left: 60};
 const visWidth =440 - margin.left - margin.right;
 const visHeight = 400 - margin.top - margin.bottom;

 // create svg tag in the div (#cases) tag
 const svg = div.append('svg')
     .attr('id','svg-LineChart-'+type)
     .attr('width', visWidth + margin.left + margin.right)
     .attr('height', visHeight + margin.top + margin.bottom);

 // create container (g tag) that would contain a linechart, grid, and axises
 const container = svg.append("g")
     .attr("transform", `translate(${margin.left}, ${margin.top})`)
     .attr('id',type+'-chart-dash');

 // create empty rectangle. This is for hovering action on the line chart
 container.append('rect')
     .attr('class','overlay')
     .attr('id', type+'-dash-overlay-dash')
     .attr('x',0)
     .attr('width',visWidth+5)
     .attr('height',visHeight)
     .style('fill','none')
     .style('pointer-events','all');

 // set the xScale and Axis based on the temporal range
 const xScale = d3.scaleTime()
     .domain([timeStart,timeEnd])
     .range([0,visWidth]);

 // set the xAxis based on xScale
 const xAxis = d3.axisBottom(xScale);

 // set the yScale and yAxis based on maximum value of cases or deaths
 let yScale;
 let yScaleDaily;
 if(maxCase<1){
   yScale = d3.scaleLinear()
       .domain([0,1]).nice()
       .range([visHeight,0]);
   yScaleDaily = yScale;
 }
 else if(maxCaseDaily<1){
  yScale = d3.scaleLinear()
      .domain([0,maxCase]).nice()
      .range([visHeight,0]);
  yScaleDaily = yScale;
 }
 else{
   yScale = d3.scaleLinear()
      .domain([0,maxCase]).nice()
      .range([visHeight,0]);

  yScaleDaily = d3.scaleLinear()
      .domain([0,maxCaseDaily]).nice()
      .range([visHeight,0]);
 }

 const yAxisTotal = d3.axisRight(yScale);
 const yAxisDaily = d3.axisLeft(yScaleDaily);

 // Create grid lines and axises
 caseAxisDash(container,xScale,yScale, yScaleDaily, xAxis, yAxisTotal, yAxisDaily, timeEnd, visWidth, visHeight);


 // this function is for drawing line graph
 const line = d3.line()
     .x(d => xScale(d.date))
     .y(d => yScale(d.cases));

 const lineDaily = d3.line()
     .x(d=>xScale(d.date))
     .y(d=>yScaleDaily(d.cases));

 // set the line color
 const lineColor = {'case':'#2196F3',
                    'death':'#F44336' };

 // draw the line graph
 container.append('g')
     .attr('class','path-lineChart')
     .append('path')
     .datum(dataTransformed)
     .attr('fill', 'none')
     .attr('stroke',lineColor[type])
     .attr('stroke-width', 2)
     .attr('d', line)
     .style('stroke-dasharray','4,2')
     .style('stroke-opacity','0.5');

 container.append('g')
     .attr('class','path-lineChart-daily')
     .append('path')
     .datum(dataTransformedDaily)
     .attr('fill', 'none')
     .attr('stroke',lineColor[type])
     .attr('stroke-width', 2)
     .attr('d', lineDaily);

 const circles = container.append('g')
     .attr('id','pointsOnLineChart');

 circles.selectAll('circle')
     .data(dataTransformedDaily)
     .join('circle')
     .attr('cx',d=>xScale(d.date))
     .attr('cy',d=>yScaleDaily(d.cases))
     .attr('class','pointsNotDisplay')
     .attr('id', d=>type+'-'+d.date.getFullYear()+'-'+(d.date.getMonth()+1)+'-'+d.date.getDate()+'-dash')
     .style('display','none')
     .attr('r',1);

 const currentDate = d3.max(dataTransformed.map(d=>d.date));
 const currentDateString = (currentDate.getMonth()+1)+'/'+currentDate.getDate()+'/'+currentDate.getFullYear();

 const totalCase = dataTransformed.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(currentDateString).getTime())[0].cases.toLocaleString();
 const newCase = Math.round(dataTransformedDaily.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(currentDateString).getTime())[0].cases).toLocaleString();

 createTitle(svg,msa);
 addLegend(svg, lineColor, type);
}

function caseAxisDash(container,xScale,yScale, yScaleDaily, xAxis, yAxisTotal, yAxisDaily, timeEnd, visWidth, visHeight){

 const grid = container.append('g')
     .attr('class','grid');

 grid.append('g')
     .attr('transform', `translate(0,${visHeight})`)
     .call(xAxis.ticks(5));

 const yAxisLeft = grid.append('g')
     .call(yAxisDaily.ticks(3));

 yAxisLeft.select('g').select('line').remove();

 const yAxisRight = grid.append('g')
     .attr('transform',`translate(${visWidth},0)`)
     .call(yAxisTotal.ticks(3));

 yAxisRight.select('g').select('line').remove();

 grid.selectAll('line')
     .attr('stroke','#424242');


  grid.append('line')
     .attr('transform', `translate(0,${visHeight})`)
     .attr('class','axis')
     .attr('x1',0)
     .attr('x2',xScale(timeEnd))
     .attr('y1',0)
     .attr('y2',0)
     .attr('stroke','#424242');

 grid.append('line')
     .attr('transform', `translate(0,0)`)
     .attr('class','axis')
     .attr('x1',0)
     .attr('x2',0)
     .attr('y1',0)
     .attr('y2',yScale(0))
     .attr('stroke','#424242');

 grid.append('line')
     .attr('transform', `translate(${visWidth},0)`)
     .attr('class','axis')
     .attr('x1',0)
     .attr('x2',0)
     .attr('y1',0)
     .attr('y2',yScale(0))
     .attr('stroke','#424242');

 // below part is for creating grid lines. I brought this from https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218
 // grid lines in x axis function
 function make_x_gridlines() {
  return d3.axisBottom(xScale)
      .ticks(8)
 }

// grid lines in y axis function

 function make_y_gridlines() {
  return d3.axisLeft(yScaleDaily)
      .ticks(3)
 }

 grid.append("g")
     .attr("class", "sub-grid-x")
     .attr("transform", "translate(0," + visHeight + ")")
     .call(make_x_gridlines()
         .tickSize(-visHeight)
         .tickFormat(""));

 grid.append("g")
     .attr("class", "sub-grid-y")
     .call(make_y_gridlines()
         .tickSize(-visWidth)
         .tickFormat("")
     );

 grid.selectAll('.sub-grid-x').selectAll('line')
     .attr('stroke','#BBBBBB')
     .style('stroke-dasharray','3 3');

 grid.selectAll('.sub-grid-y').selectAll('line')
     .attr('stroke','#BBBBBB')
     .style('stroke-dasharray','3 1');



 grid.selectAll('.domain').remove();
}
function hoveringDash(data, dataDaily, xScale, yScale, visHeight, type,currentDateString, totalCase, newCase){
 d3.select('#'+type+'-chart-dash')
     .on('mouseover',function(d){
      const coordinates= d3.mouse(this);
      const xPosition = coordinates[0];
      const time = xScale.invert(xPosition);

      const date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
      const xPositionTooltip = xScale(d3.timeParse('%Y-%m-%d')(date));
      const data_filtered = data.filter(d=>d.date.getTime()===d3.timeParse('%Y-%m-%d')(date).getTime())[0];

     })
     .on('mousemove',function(d,i){
      const coordinates= d3.mouse(this);
      const xPosition = coordinates[0];
      const time = xScale.invert(xPosition);

      const dateSelector = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
      const date = (time.getMonth()+1)+'/'+time.getDate() + '/' + time.getFullYear();
      const dataFiltered = data.filter(d=>d.date.getTime()===d3.timeParse('%Y-%m-%d')(dateSelector).getTime())[0];
      const dataFilteredDaily = dataDaily.filter(d=>d.date.getTime()===d3.timeParse('%Y-%m-%d')(dateSelector).getTime())[0];

      if((pasthoveredDate !== undefined)&&(pasthoveredDate!==dateSelector)){
       d3.select('#'+type+'-'+pasthoveredDate+'-dash')
           .style('display','none')
      }

      pasthoveredDate = dateSelector;

      d3.select('#'+type+'-'+dateSelector+'-dash')
          .style('display','block')
          .attr('r','3')
          .transition();

      d3.select('#'+type+'date')
          .text(`Date: ${date}`);

      d3.select('#'+type+'newCase')
          .text(`New cases: ${Math.round(dataFilteredDaily.cases).toLocaleString()}`);

      d3.select('#'+type+'totalCase')
          .text(`Total cases: ${dataFiltered.cases.toLocaleString()}`);
     })
     .on('mouseout',function(d,i){
      if(pasthoveredDate !== undefined){
       d3.select('#'+type+'-'+pasthoveredDate+'-dash')
           .style('display','none');
      }
      d3.select('#'+type+'date')
          .text(`Date: ${currentDateString}`);

      d3.select('#'+type+'newCase')
          .text(`New case: ${newCase}`);

      d3.select('#'+type+'totalCase')
          .text(`Total case: ${totalCase}`);

     });
}

function addLegend(svg,lineColor, type){
   const legend = svg.append('g')
       .attr('transform', 'translate(0,315)')
       .style('font-size','12px');

   legend.append('line')
       .attr('x1',100)
       .attr('x2',130)
       .attr('y1',0)
       .attr('y2',0)
       .attr('stroke',lineColor[type])
       .style('stroke-width','2px');

   legend.append('text')
       .attr('x',135)
       .attr('y',4)
       .text('New cases');

   legend.append('line')
         .attr('x1',230)
         .attr('x2',260)
         .attr('y1',0)
         .attr('y2',0)
         .attr('stroke',lineColor[type])
         .style('stroke-width','2px')
         .style('stroke-dasharray','4,2')
         .style('stroke-opacity','0.5');

   legend.append('text')
       .attr('x',265)
       .attr('y',4)
       .text('Total cases');
}

function createTitle(svg,msa){
 const title = svg.append('g')
     .attr('transform','translate(15,60)');

 title.append('text')
     .text('April 5, 2020')
     .attr('x',0)
     .attr('y',0)
     .style('font-size', '18px');

 title.append('text')
     .text(msa)
     .attr('x',0)
     .attr('y',25)
     .style('font-size', '14px');

 title.append('text')
     .text('Population: '+ (19979477).toLocaleString())
     .attr('x',0)
     .attr('y',45)
     .style('font-size', '14px');
}


function subtractDays(date, days) {
 return new Date(
     date.getFullYear(),
     date.getMonth(),
     date.getDate() - days,
     date.getHours(),
     date.getMinutes(),
     date.getSeconds(),
     date.getMilliseconds()
 );
}

function updateCaseLineChart(source){
  const msa = source.value;

  if(d3.select('.clicked')._groups[0][0]!==null){
   d3.select('.clicked').attr('class','')
       .attr('stroke','#969696')
       .style('stroke-width','1px');
  }

  d3.select('#'+msa.replace(/\s/g, '').replace(/,/g, ""))
      .attr('stroke','#212121')
      .style('stroke-width','2px')
      .attr('class','clicked');

  const timeStart = "2020-01-21";
  const timeEnd = "2020-05-14";
  const cases_copied =Array.from(store.cases);
  const cases_copied_daily = Array.from(store.casesDaily);
  const deaths_copied = Array.from(store.deaths);
  const deaths_copied_daily = Array.from(store.deathsDaily);
  d3.select('#svg-LineChart-case').remove();
  d3.select('#svg-LineChart-death').remove();
  if(msa!=='Select MSA'){
    lineChartDash(cases_copied,cases_copied_daily,msa,d3.select('#cases-dashboard'),'case', timeEnd);
    lineChartDash(deaths_copied,deaths_copied_daily,msa,d3.select('#deaths-dashboard'),'death', timeEnd);
  }
  else{
    lineChartDash(cases_copied,cases_copied_daily,store.msa,d3.select('#cases-dashboard'),'case',timeEnd);
    lineChartDash(deaths_copied,deaths_copied_daily,store.msa,d3.select('#deaths-dashboard'),'death', timeEnd);
  }
}