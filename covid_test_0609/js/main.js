// this is an empty object. Datasets will be stored in here.
const store = {};

// this is for line charts in the project description
Promise.all([
   d3.csv('data/USA_MSA_aggregated_case.csv', d3.autoType),
   d3.csv('data/USA_MSA_aggregated_death.csv',  d3.autoType)
]).then(([cases, deaths])=>{
    lineChart(cases, d3.select('#MSA__chart-case'),'case', '2020-03-01','2020-05-14');
    lineChart(deaths, d3.select('#MSA__chart-death'),'death','2020-03-01','2020-05-14');
});


// this is for line charts in dashboard part
Promise.all([
    d3.csv('data/MSA_cases_total.csv', d3.autoType),
    d3.csv('data/MSA_death_total.csv', d3.autoType),
    d3.csv('data/MSA_cases_daily.csv', d3.autoType),
    d3.csv('data/MSA_death_daily.csv', d3.autoType)

]).then(([cases, deaths,casesDaily, deathsDaily]) => {
    store.cases=cases;
    store.casesDaily=casesDaily;
    store.deaths=deaths;
    store.deathsDaily=deathsDaily;
    dropdownMSA(cases, d3.selectAll('.menu__MSA-select'));
    //dropdownMSA_download(cases,d3.select('#checkboxes'));
    const msa = 'New York-Newark-Jersey City, NY-NJ-PA';
    lineChartDash(cases,casesDaily,msa,d3.select('#cases-dashboard'),'case',"2020-05-19");
    lineChartDash(deaths,deathsDaily,msa,d3.select('#deaths-dashboard'),'death',"2020-05-14");
    dataExtract();
});

// this is for a map in dashboard
Promise.all([
    d3.csv('data/MSAdataformaps_case.csv', d3.autoType),
    d3.csv('data/MSAdataformaps_death.csv',d3.autoType),
    d3.json('data/state_simplified.geojson'),
    d3.json('data/msa_simplified_filtered.geojson')
]).then(([caseMap, deathMap, geoState, geoMSA]) => {
    map(caseMap,geoState,geoMSA, d3.select('#map_case'),'case');
    map(caseMap,geoState,geoMSA, d3.select('#map_death'),'case');
});