function dropdownMSA(data,menu){
    menu.append('option')
        .text('New York-Newark-Jersey City, NY-NJ-PA');
    const msaArray = data.map(d=>d['MSA']);
    for(let i=0; i<msaArray.length;i++){
        menu.append('option')
            .text(msaArray[i])
            .attr('value',msaArray[i]);    }
}

function dropdownMSA_download(data,menu){
    const msaArray = data.map(d=>d['MSA']);
    console.log(data);
    menu.append('label')
        .attr('for','selectAll')
        .html(`<input type="checkbox" onclick="checkAll(this)" /> Select All`);
    for(let i=0; i<msaArray.length;i++){
        console.log(msaArray[i]);
        menu.append('label')
            .attr('for',msaArray[i])
            .html(`<input type="checkbox" name="MSA_check" id=${msaArray[i].replace(/\s/g, '').replace(/\./g, '')} /> ${msaArray[i]}`);
    }
}

function checkAll(source){
    let checkboxes = document.getElementsByName('MSA_check');
    for(let i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}


function downloadPanel(){
    const button = document.getElementById('download-button');
    const panel = document.getElementById('download-panel');
    if(button.style.display !== 'none'){
        button.style.display = 'none';
        panel.style.display = 'flex';
    }
    else{button.style.display = 'block';
         panel.style.display = 'none';   }
}

function dataExtract(){
    const timeStart = document.getElementById("timeStart-download").value;
    const timeEnd = document.getElementById("timeEnd-download").value;
    const dataType = document.getElementById("data-select").value;
    const checkboxes = document.getElementsByTagName('input');
    let MSAArray = [];
    for(let i=0, n=checkboxes.length; i<n; i++){
        if(checkboxes[i].checked){
            MSAArray.push(checkboxes[i].id);
        }
    }
    let dataFiltered;
    if(dataType==='case'){
        dataFiltered= store.cases.filter(d=>MSAArray.includes(d.MSA.replace(/\s/g, '').replace(/\./g, '')));
    }
    else{
        dataFiltered= store.deaths.filter(d=>MSAArray.includes(d.MSA.replace(/\s/g, '').replace(/\./g, '')));
    }
    let keyLength = Object.keys(dataFiltered[0]).length;
    let dateArray = Object.keys(dataFiltered[0]).slice(1,keyLength)
        .filter(d=> ( d3.timeParse('%Y-%m-%d')(timeStart) <= d3.timeParse('%m/%d/%Y')(d)) & (d3.timeParse('%Y-%m-%d')(timeEnd) >=d3.timeParse('%m/%d/%Y')(d)));

    dataFiltered = dataFiltered.map(function(d){
        let obj = {};
        obj['MSA'] = d['MSA'];
        for(let i =0; i<dateArray.length;i++){
            obj[dateArray[i]]=d[dateArray[i]];
        }
        return obj;
    });
    let csv = Object.keys(dataFiltered[0]).join(',')+'\n';
    const arr_length = Object.keys(dataFiltered[0]).length;
    for(let i=0;i<dataFiltered.length;i++){
        csv += '"'+Object.values(dataFiltered[i])[0]+'"'+',';
        csv += Object.values(dataFiltered[i]).slice(1,arr_length).join(',');
        csv += '\n';
    }
    store.csv = csv;
}

function download_csv(){
    dataExtract();
    let hiddenElement = document.createElement('a');
    const dataType = document.getElementById("data-select").value;
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(store.csv);
    hiddenElement.target = '_blank';
    if(dataType==='case'){
        hiddenElement.download = 'covid19_case_MSA.csv';
    }
    else{
        hiddenElement.download = 'covid19_death_MSA.csv';
    }
    hiddenElement.click();
}


let expanded = false;

function showCheckboxes() {
    const checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}