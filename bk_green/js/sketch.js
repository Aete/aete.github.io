let canvas;
let myMap;
let tripsCoordinates;
let allCoordinates = [];

const options = {
    lat: 40.661311,
    lng:  -73.968349,
    zoom: 13,
    style: "mapbox://styles/mapbox/dark-v9"
};

const key = 'pk.eyJ1Ijoic2doYW4iLCJhIjoiY2s1cTZ1bjhyMGV4ZDNmcnA4MDNiZTB0dSJ9.DQiTMBUJadYyzsImOZI-Uw';
const mappa = new Mappa('MapboxGL',key);

let data ;
let stationList;
let stationValue;

function preload(){
   data = loadTable('data/sample_10am.csv','csv','header').rows;
}


function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 100);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    data = data.map(d => d.obj);
    drawCircle();
    myMap.onChange(drawCircle);
    noStroke();
    ellipseMode(CENTER);
}

function draw(){

}

function drawCircle(){
    clear();
    console.log('!');
    for (let i = 0; i < data.length; i++) {

        let coords = myMap.latLngToPixel(+data[i]['lat'], +data[i]['lng']);
        if(data[i].counts<59168){
            fill('#F44336');
        }
        else if(data[i].counts<86292){
            fill('#EF9A9A');
        }
        else if(data[i].counts<120556){
            fill('#A5D6A7');
        }
        else{
            fill('#4CAF50');
        }
        ellipse(coords.x,coords.y,2);
    }
}
