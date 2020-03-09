let canvas;
let myMap;
let tripsCoordinates;
let allCoordinates = [];

const options = {
    lat: 40.73447,
    lng: -73.97532,
    zoom: 13,
    style: "mapbox://styles/mapbox/dark-v9"
};

const key = 'pk.eyJ1Ijoic2doYW4iLCJhIjoiY2s1cTZ1bjhyMGV4ZDNmcnA4MDNiZTB0dSJ9.DQiTMBUJadYyzsImOZI-Uw';
const mappa = new Mappa('MapboxGL',key);

let data ;
let stationList;
let stationValue;

function preload(){
    data = loadTable('data/trip_sample_simple.csv','csv','header').rows;
}


function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 100);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    data = data.map(d => d.obj);
    drawCurve();
    myMap.onChange(drawCurve);
    angleMode(DEGREES);
    ellipseMode(CENTER);

}

function draw(){

}

function drawCurve(){
    clear();
    for (let i = 0; i < data.length; i++) {
        let posStart = myMap.latLngToPixel(data[i]['start station latitude'], data[i]['start station longitude']);
        let posEnd = myMap.latLngToPixel(data[i]['end station latitude'], data[i]['end station longitude']);
        //if(myMap.map!==undefined){rotateX(-90+myMap.map.getPitch());} else{rotateX(90);}
        //if(myMap.map!==undefined){rotateY(-myMap.map.getBearing());}
        stroke(255,249,203,data[i]['tripduration']*0.8);
        line(posStart.x, posStart.y,posEnd.x, posEnd.y,0);
    }
}