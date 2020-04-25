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
const urllionStreet = 'data/lion_street_man.geojson';
const urllionNode = 'data/lion_node_man.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('street').setData(urllionStreet);
        map.getSource('node').setData(urllionNode);

    }, 2000);

    // add sources to the Map
    map.addSource('street', { type: 'geojson', data:urllionStreet , 'generateId': false});
    map.addSource('node', { type: 'geojson', data:urllionNode, 'generateId': false});

    // add a layer and set properties

    map.addLayer({
        "id": "street",
        "source": "street",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#FFC107",
            "line-width": 2,
            'line-opacity': 0.75
        }
    });

    map.addLayer({
        "id": "node",
        "source": "node",
        "type": "circle",
        "paint": {
            "circle-color": "#FF9800",
            "circle-radius":3
        }
    });


});
