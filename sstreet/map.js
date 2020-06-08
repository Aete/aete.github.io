// make an object for map styles
const palette = {
    'dark': { 'mapStyle': 'mapbox://styles/sghan/ck1ljdcmy16fc1cpg0f4qh3wu'},
    'light':{'mapStyle':'mapbox://styles/sghan/ck35793ez3b7q1dpmdl5ek4g2',
    }};

// import mapboxgl to div container
let map = new mapboxgl.Map({
    container: 'map',
    style: palette['dark']['mapStyle'],
    center: [-73.979800, 40.760806],
    zoom: 10
});

// add a controller (zoom and direction)
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// set variables for file addresses
const urlNode = 'data/shst_node.geojson';
const urlLong = 'data/sstreet_long.geojson';
const urlShort = 'data/sstreet_short.geojson';


map.on('load', function () {
    // get source from url
    window.setInterval(function() {
        map.getSource('node').setData(urlNode);
        map.getSource('long').setData(urlLong);
        map.getSource('short').setData(urlShort);


    }, 2000);

    // add sources to the Map
    map.addSource('node', { type: 'geojson', data:urlNode, 'generateId': false});
    map.addSource('long', { type: 'geojson', data:urlLong, 'generateId': false});
    map.addSource('short', { type: 'geojson', data: urlShort, 'generateId': false});

    // add a layer and set properties

    map.addLayer({
        "id": "node",
        "source": "node",
        "type": "circle",
        "paint": {
            "circle-color": "#2196f4",
            "circle-radius":4
        }
    });

    map.addLayer({
        "id": 'long',
        "source": 'long',
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#2196F3",
            "line-opacity":0.5,
            "line-width": 2,

        }
    });

    map.addLayer({
        "id": 'short',
        "source": 'short',
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#FFC107",
            "line-width": 2,

        }
    });
});
