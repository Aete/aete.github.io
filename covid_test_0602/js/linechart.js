function lineChart(data, div, type, timeStartbyUser, timeEndbyUser){
    let timeStart = d3.timeParse('%Y-%m-%d')(timeStartbyUser);
    let timeEnd = d3.timeParse('%Y-%m-%d')(timeEndbyUser);

    d3.selectAll('.today').text(`${timeEnd.getMonth()+1}/${timeEnd.getDate()}/${timeEnd.getFullYear()}`);
    const data_msa = data.filter(d=>d.category === 'MSA_daily')[0];
    const data_usa = data.filter(d=>d.category === 'USA_daily')[0];
    const data_msa_total = data.filter(d=>d.category === 'USA_daily')[0];
    const data_usa_total = data.filter(d=>d.category === 'USA_daily')[0];

    // use caseDataPrep function in lineChartDash.js
    const dataTransformedMSA = caseDataPrep(data_msa, timeStart, timeEnd);
    const dataTransformedUSA = caseDataPrep(data_usa, timeStart, timeEnd);
    const dataTransformedMSATotal =  caseDataPrep(data_msa_total, timeStart, timeEnd);
    const dataTransformedUSATotal =  caseDataPrep(data_usa_total, timeStart, timeEnd);

    const MSA_new_case = dataTransformedMSA.filter(d=>d.date.getTime()===timeEnd.getTime())[0].cases;
    const USA_new_case = dataTransformedUSA.filter(d=>d.date.getTime()===timeEnd.getTime())[0].cases;

    d3.select('#'+type+'-percentage').text((Math.round((MSA_new_case/USA_new_case)*1000)/10)+'% (MSA: '+(MSA_new_case+'/USA:'+USA_new_case)+')');

    // calculate maximum of cases or deaths and date
    let maxCase = d3.max([d3.max(dataTransformedMSA.map(d=>d.cases)),d3.max(dataTransformedUSA.map(d=>d.cases))]);

    // set the margin of the visualization
    const margin = {top:20, right: 20, bottom: 50, left: 50};
    const visWidth =1280 - margin.left - margin.right;
    const visHeight = 200 - margin.top - margin.bottom;

    // create svg tag in the div (#cases) tag
    const svg = div.append('svg')
        .attr('width', visWidth + margin.left + margin.right)
        .attr('height', visHeight + margin.top + margin.bottom);

    // create container (g tag) that would contain a linechart, grid, and axises
    const container = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .attr('id',type+'-chart');

    container.append('rect')
        .attr('class','overlay')
        .attr('id', type+'-dash-overlay')
        .attr('x',0)
        .attr('y',-10)
        .attr('width',visWidth+10)
        .attr('height',visHeight+10)
        .style('fill','none')
        .style('pointer-events','all');

    // set the xScale and Axis based on the temporal range
    const xScale = d3.scaleTime()
        .domain([timeStart,timeEnd])
        .range([0,visWidth]);

    // set the xAxis based on xScale
    const xAxis = d3.axisBottom(xScale);


    // set the yScale and yAxis based on maximum value of cases or deaths
    let yScale = d3.scaleLinear()
            .domain([0,maxCase]).nice()
            .range([visHeight,0]);

    const yAxis = d3.axisLeft(yScale);

    // Create grid lines and axises
    caseAxis(container,xScale,yScale,xAxis, yAxis, timeEnd, visWidth, visHeight);

    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.cases));

    // draw the line graph
    container.append('g')
        .attr('class','path-lineChart')
        .append('path')
        .datum(dataTransformedMSA)
        .attr('fill', 'none')
        .attr('stroke',type==='case'?'#2196F3':'#F44336')
        .attr('stroke-width', 2)
        .attr('d', line);

    container.append('g')
        .attr('class','path-lineChart')
        .append('path')
        .datum(dataTransformedUSA)
        .attr('fill', 'none')
        .attr('stroke',type==='case'?'#009688':'#FF9800')
        .attr('stroke-width', 2)
        .attr('d', line)
        .style('stroke-dasharray','4,2')
        .style('stroke-opacity','0.8');

    const circles = container.append('g')
        .attr('id','pointsOnLineChart');

    circles.selectAll('circle')
        .data(dataTransformedMSA)
        .join('circle')
        .attr('cx',d=>xScale(d.date))
        .attr('cy',d=>yScale(d.cases))
        .attr('class','pointsNotDisplay')
        .attr('id', d=>type+'-'+d.date.getFullYear()+'-'+(d.date.getMonth()+1)+'-'+d.date.getDate())
        .style('display','none')
        .attr('r',1);

    // create the title of the visualization with the number of confirmed cases or reported deaths
    hovering(dataTransformedMSA, dataTransformedMSATotal, dataTransformedUSA, dataTransformedUSA, xScale, yScale, visHeight, type);



}

function caseDataPrep(data, timeStart, timeEnd){

    // extract dates of the dataset
    const dateArray = Object.keys(data).filter(d=>(d!=='MSA')&(d!=='category'));
    console.log(data);
    // transform the dataset for the d3 visualization
    let dataTransformed = dateArray.map(function(d){
        let obj = {};
        obj.date = d3.timeParse('%m/%d/%Y')(d);
        obj.cases = data[d];
        return obj
    });

    dataTransformed = dataTransformed.sort((a,b)=>d3.ascending(a,b));

    dataTransformed = dataTransformed.filter(d=>d.date<=timeEnd);

    dataTransformed = dataTransformed.filter(d=>d.date>=timeStart);

    return dataTransformed;
}

function caseAxis(container,xScale,yScale,xAxis, yAxis, timeEnd, visWidth, visHeight){

    const grid = container.append('g')
        .attr('class','grid');

    grid.append('g')
        .attr('transform', `translate(0,${visHeight})`)
        .call(xAxis.ticks(5));

    grid.append('g')
        .call(yAxis.ticks(3));

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

    // below part is for creating grid lines. I brought this from https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218
    // grid lines in x axis function
    function make_x_gridlines() {
        return d3.axisBottom(xScale)
            .ticks(8)
    }

// grid lines in y axis function

    function make_y_gridlines() {
        return d3.axisLeft(yScale)
            .ticks(3)
    }


    grid.selectAll('.tick').select('line').remove();

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



function hovering(dataMSA, dataMSATotal, dataUSA, dataUSATotal,xScale, yScale, visHeight, type){
    d3.select('#'+type+'-'+'chart')
        .on('mouseover',function(d){
            const coordinates= d3.mouse(this);
            const xPosition = coordinates[0];
            const time = xScale.invert(xPosition);

            const date = (time.getMonth()+1)+'/'+time.getDate() + '/' + time.getFullYear();
            const xPositionTooltip = xScale(d3.timeParse('%Y-%m-%d')(date));
            const dataMSADaily = (dataMSA.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataUSADaily = (dataUSA.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataMSACumulative = (dataMSATotal.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataUSACumulative = (dataUSATotal.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();

            const tooltip = d3.select(this)
                .append('g')
                .attr('class','window')
                .attr('transform','translate(10,10)');

            tooltip.append('rect')
                .attr('x', 0)
                .attr('y',0)
                .attr('width',200)
                .attr('height',110)
                .attr('fill','#FFFFFF')
                .attr('fill-opacity',0.8)
                .attr('stroke','#636363');

            tooltip.selectAll('.tooltipTextMetric')
                .data(['MSA Daily new '+ type + ': ' + dataMSADaily,
                    'MSA Total '+ type + ': ' +dataMSACumulative,
                    'USA Daily new '+ type + ': ' + dataUSADaily,
                    'USA Total '+ type + ': '+dataUSACumulative])
                .join('text')
                .attr('class','tooltipTextMetric')
                .attr('x',10)
                .attr('y', (d,i)=>40+20*i)
                .style('font-size','12px')
                .text(d=>d);

            tooltip.append('text')
                .attr('id','tooltipDate')
                .text(date)
                .attr('x',10)
                .attr('y',20)
                .style('font-size','12px');

        })
        .on('mousemove',function(d,i){
            const coordinates= d3.mouse(this);
            const xPosition = coordinates[0];
            const time = xScale.invert(xPosition);

            const date = (time.getMonth()+1)+'/'+time.getDate() + '/' + time.getFullYear();
            const dateSelector = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            const xPositionTooltip = xScale(d3.timeParse('%Y-%m-%d')(date));
            const dataMSADaily = (dataMSA.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataUSADaily = (dataUSA.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataMSACumulative = (dataMSATotal.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();
            const dataUSACumulative = (dataUSATotal.filter(d=>d.date.getTime()===d3.timeParse('%m/%d/%Y')(date).getTime())[0].cases).toLocaleString();

            if((pasthoveredDate !== undefined)&&(pasthoveredDate!==date)){
                d3.select('#'+type+'-'+pasthoveredDate)
                    .style('display','none')
            }
            pasthoveredDate = dateSelector;

            d3.select('#'+type+'-'+dateSelector)
                .style('display','block')
                .attr('r','3')
                .transition();

            d3.select('#tooltipDate')
                .text(date);

            d3.selectAll('.tooltipTextMetric')
                .data(['MSA Daily new '+ type + ': ' + dataMSADaily,
                    'MSA Total '+ type + ': ' +dataMSACumulative,
                    'USA Daily new '+ type + ': ' + dataUSADaily,
                    'USA Total '+ type + ': '+dataUSACumulative])
                .text(d=>d);
        })
        .on('mouseout',function(d,i){
            if(pasthoveredDate !== undefined){
                d3.select('#'+type+'-'+pasthoveredDate)
                    .style('display','none');
            }
            d3.select('.window').remove();
        });
}