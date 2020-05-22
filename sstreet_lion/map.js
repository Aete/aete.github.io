// make an object for map styles
const palette = {
    'dark': { 'mapStyle': 'mapbox://styles/sghan/ck1ljdcmy16fc1cpg0f4qh3wu'},
    'light':{'mapStyle':'mapbox://styles/sghan/ck35793ez3b7q1dpmdl5ek4g2',
    }};

// import mapboxgl to div container
let map = new mapboxgl.Map({
    container: 'map',
    style: palette['dark']['mapStyle'],
    center: [-74.070000, 40.722535],
    zoom: 12
});

// add a controller (zoom and direction)
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// set variables for file addresses
const urlmatched = 'data/matched_lion.geojson';
const urlunmatched = 'data/unmatched_lion.geojson';
const urlSstreet = 'data/ssnetwork.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('matched').setData(urlmatched);
        map.getSource('unmatched').setData(urlunmatched);
        map.getSource('sstreet').setData(urlSstreet);
    }, 2000);

    // add sources to the Map
    map.addSource('matched', { type: 'geojson', data:urlmatched, 'generateId': false});
    map.addSource('unmatched', { type: 'geojson', data:urlunmatched, 'generateId': false});
    map.addSource('sstreet', { type: 'geojson', data:urlunmatched, 'generateId': false});
    // add a layer and set properties

    map.addLayer({
        "id": "matched",
        "source": "matched",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#2196F4",
            "line-width": 2,

        }
    });

    map.addLayer({
        "id": "unmatched",
        "source": "unmatched",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#F44336",
            "line-width": 2,

        }
    });

});
