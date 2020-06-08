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
const urlMatchedEventsAfter = 'data/511events_matched_after.geojson';
const urlMatchedEventsSegment = 'data/511events_matched_segment.geojson';
const urlMatchedEventsBefore = 'data/511events_matched_before.geojson';
const urlTrackingLine = 'data/511events_matched_tracking_lines.geojson';
const urlUnmatched = 'data/511events_unmatched.geojson';

map.on('load', function () {
    // get source from url
    window.setInterval(function() {
        map.getSource('matchedEventsAfter').setData(urlMatchedEventsAfter);
        map.getSource('matchedEventsSegment').setData(urlMatchedEventsSegment);
        map.getSource('matchedEventsBefore').setData(urlMatchedEventsBefore);
        map.getSource('matchedEventsTracking').setData(urlTrackingLine);
        map.getSource('unmatched').setData(urlUnmatched);

    }, 2000);

    // add sources to the Map
    map.addSource('matchedEventsAfter', { type: 'geojson', data:urlMatchedEventsAfter, 'generateId': false});
    map.addSource('matchedEventsSegment', { type: 'geojson', data:urlMatchedEventsSegment, 'generateId': false});
    map.addSource('matchedEventsBefore', { type: 'geojson', data: urlMatchedEventsBefore, 'generateId': false});
    map.addSource('matchedTrackingLine', { type: 'geojson', data: urlTrackingLine, 'generateId': false});
    map.addSource('unmatched', { type: 'geojson', data:urlUnmatched, 'generateId': false});

    // add a layer and set properties

    map.addLayer({
        "id": "matchedEventsAfter",
        "source": "matchedEventsAfter",
        "type": "circle",
        "paint": {
            "circle-color": "#2196f4",
            "circle-radius":4
        }
    });


    map.addLayer({
        "id": "matchedEventsBefore",
        "source": "matchedEventsBefore",
        "type": "circle",
        "paint": {
            "circle-color": "#009688",
            "circle-radius":4
        }
    });

    map.addLayer({
        "id": 'matchedEventsSegment',
        "source": 'matchedEventsSegment',
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
        "id": 'matchedTrackingLine',
        "source": 'matchedTrackingLine',
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
