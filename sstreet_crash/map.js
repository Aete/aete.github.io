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
const urlCollision = 'data/original_collision.geojson';
const urlMatched = 'data/matched_collision.geojson';
const urlUnmatched = 'data/unmatched_collision.geojson';
const urlLink = 'data/track_mapping_collision.geojson';
const urlSstreet = 'data/ssnetwork.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('collision').setData(urlCollision);
        map.getSource('matched').setData(urlMatched);
        map.getSource('unmatched').setData(urlUnmatched);
        map.getSource('link').setData(urlLink);
        map.getSource('sstreet').setData(urlSstreet);

    }, 2000);

    // add sources to the Map
    map.addSource('link', { type: 'geojson', data:urlLink, 'generateId': false});
    map.addSource('collision', { type: 'geojson', data:urlCollision, 'generateId': false});
    map.addSource('matched', { type: 'geojson', data:urlMatched, 'generateId': false});
    map.addSource('unmatched', { type: 'geojson', data:urlUnmatched, 'generateId': false});
    map.addSource('sstreet', { type: 'geojson', data:urlSstreet, 'generateId': false});

    // add a layer and set properties
    map.addLayer({
        "id": 'link',
        "source": 'link',
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
        "id": 'sstreet',
        "source": 'sstreet',
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"

        },
        "paint": {
            "line-color": "#2196F3",
            "line-width": 2,
            'line-opacity': 0.75
        }
    });

    map.addLayer({
        "id": "collision",
        "source": "collision",
        "type": "circle",
        "paint": {
            "circle-color": "#FFC107",
            "circle-radius":4
        }
    });



    map.addLayer({
        "id": "matched",
        "source": "matched",
        "type": "circle",
        "paint": {
            "circle-color": "#2196f4",
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
