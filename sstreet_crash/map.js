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
const urlMatchedIntersection = 'data/matched_intersection.geojson';
const urlMatchedSegment = 'data/matched_segment.geojson';
const urlUnmatched = 'data/unmatched_collision.geojson';

map.on('load', function () {
    // get source from url
    window.setInterval(function() {
        map.getSource('matchedIntersection').setData(urlMatchedIntersection);
        map.getSource('matchedSegment').setData(urlMatchedSegment);
        map.getSource('unmatched').setData(urlUnmatched);

    }, 2000);

    // add sources to the Map
    map.addSource('matchedIntersection', { type: 'geojson', data:urlMatchedIntersection, 'generateId': false});
    map.addSource('matchedSegment', { type: 'geojson', data:urlMatchedSegment, 'generateId': false});
    map.addSource('unmatched', { type: 'geojson', data:urlUnmatched, 'generateId': false});

    // add a layer and set properties

    map.addLayer({
        "id": "matchedIntersection",
        "source": "matchedIntersection",
        "type": "circle",
        "paint": {
            "circle-color": "#2196f4",
            "circle-radius":4
        }
    });



    map.addLayer({
        "id": "matchedSegment",
        "source": "matchedSegment",
        "type": "circle",
        "paint": {
            "circle-color": "#009688",
            "circle-radius":4
        }
    });


    map.addLayer({
        "id": "unmatched",
        "source": "unmatched",
        "type": "circle",
        "paint": {
            "circle-color": "#F44336",
            "circle-radius":4
        }
    });




});
