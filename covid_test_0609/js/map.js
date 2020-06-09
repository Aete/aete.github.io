function map(data,geoState,geoMSA, div,type){
    // set the margin of the visualization
    const margin = {top:0, right: 20, bottom: 40, left: 20};
    const visWidth =550 - margin.left - margin.right;
    const visHeight = 450 - margin.top - margin.bottom;

    const data_transformed = Array.from(data).map(function(d){
       if(d['Still increasing, but not doubling in 5 days']===1){d.category=1}
       else if(d['Doubles in less than 5 days, first peak']===1){d.category=2}
       else if(d['Doubles in less than 5 days, 2nd peak']===1){d.category=3}
       else if(d['Beyond peak']===1){d.category=4}
       else{d.category = 5}
        return d
    });

    // create svg tag in the div (#cases) tag
    const svg = div.append('svg')
        .attr('id','svg-map')
        .attr('width', visWidth + margin.left + margin.right)
        .attr('height', visHeight + margin.top + margin.bottom);

    // create container (g tag) that would contain a linechart, grid, and axises
    const container = svg.append("g")
        .attr("transform", `translate(${margin.left}, -10)`)
        .attr('id',type+'_map');

    const projection =  d3.geoAlbersUsa()
        .fitSize([visWidth, visHeight], geoMSA);

    const path = d3.geoPath().projection(projection);

    const cScale = d3.scaleOrdinal()
        .domain([1,2,3,4,5])
        .range(['#DE8766','#730000','#D40000','#F5CFBA','#BFD6B5']);

    container.selectAll('.state')
        .data(geoState.features.filter(d => d.properties.NAME !== 'Puerto Rico'))
        .join('path')
        .attr('class', 'state')
        .attr('d', path)
        .attr('fill', '#FFFFFF')
        .attr('stroke', '#CCCCCC');

    container.selectAll('.msa')
        .data(geoMSA.features)
        .join('path')
        .attr('id',d=>d.properties.NAME.replace(/\s/g, '').replace(/,/g, ""))
        .attr('d', path)
        .attr('fill', function(d){
            const data_filtered = data_transformed.filter(g=>g.MSA === d.properties.NAME)[0];
            if(data_filtered!==undefined){
                return cScale(data_filtered.category);
            }
            else{
                return '#FFFFFF';
            }
        })
        .attr('stroke', '#969696')
        .on('mouseover',function(d){
            const coordinates= d3.mouse(this);
            const xPosition = coordinates[0]+20;
            const yPosition = coordinates[1]+20;
            console.log(d3.mouse(this));
            /*
            const tooltip = d3.select('#'+type+'_map')
                .append('g')
                .attr('id', 'tooltipMap')
                .attr('transform',`translate(${xPosition},${yPosition})`);

            tooltip.append('rect')
                .attr('x',0)
                .attr('y',0)
                .attr('width',200)
                .attr('height',50)
                .attr('stroke','#424242')
                .attr('fill','#FFFFFF');

            tooltip.append('text')
                .attr('x',5)
                .attr('y',15)
                .text(d.properties.NAME)
                .style('font-size','11px')
                .style('font-family','sans-serif')
                .attr('text-anchor','start');

             */
    })
        .on('mousemove',function(d){
            d3.select(this)
                .attr('stroke','#212121')
                .style('stroke-width','2px');

            const coordinates= d3.mouse(this);
            const xPosition = coordinates[0]-85;
            const yPosition = coordinates[1]-55;
            d3.select('#tooltipMap')
                .attr('transform',`translate(${xPosition},${yPosition})`);
        })
        .on('mouseout',function(d){
            if(d3.select(this).attr('class')!=='clicked'){
                d3.select(this)
                    .attr('stroke','#969696')
                    .style('stroke-width','1px');
            }
            d3.select('#tooltipMap').remove();
        })
        .on('click',function(d){
            document.getElementById("msa-select").value = d.properties.NAME;

            updateCaseLineChart();
    });

    const legend = svg.append('g')
        .attr('transform','translate(200,360)');

    legend.selectAll('rect')
        .data([2,3,1])
        .join('rect')
        .attr('x',0)
        .attr('y',(d,i)=>20*i+20)
        .attr('width',10)
        .attr('height',10)
        .attr('fill', d=>cScale(d));

    legend.selectAll('text')
        .data(['Still increasing, but not doubling in 5 days',
            'Doubles in less than 5 days, first peak',
            'Doubles in less than 5 days, 2nd peak'])
        .join('text')
        .attr('x', 20)
        .attr('y',(d,i)=>20*i+29)
        .style('font-size','10px')
        .text(d=>d);

    const legend2 = svg.append('g')
        .attr('transform','translate(420,360)');

    legend2.selectAll('rect')
        .data([4,5])
        .join('rect')
        .attr('x',0)
        .attr('y',(d,i)=>20*i+20)
        .attr('width',10)
        .attr('height',10)
        .attr('fill', d=>cScale(d));

    legend2.selectAll('text')
        .data(['Beyond peak',
            'Clear, no cases ever'])
        .join('text')
        .attr('x', 20)
        .attr('y',(d,i)=>20*i+29)
        .style('font-size','10px')
        .text(d=>d);
}



