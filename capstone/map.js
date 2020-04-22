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
const urlLion = 'sampled_dataset(bk)/lion_bk_simplified.geojson';
const urlCollision = 'sampled_dataset(bk)/collision_bk_simplified.geojson';
const urlCollisionSnap = 'sampled_dataset(bk)/collisions_snapped_bk.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('LION').setData(urlLion);
        map.getSource('collision').setData(urlCollision);
        map.getSource('collisionSnap').setData(urlCollisionSnap);

    }, 2000);

    // add sources to the Map
    map.addSource('LION', { type: 'geojson', data: urlLion, 'generateId': false});
    map.addSource('collision', { type: 'geojson', data:urlCollision, 'generateId': false});
    map.addSource('collisionSnap', { type: 'geojson', data:urlCollisionSnap, 'generateId': false});

    // add a layer and set properties
    map.addLayer({
        "id": "LION",
        "source": "LION",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"

        },
        "paint": {
            "line-color": "#4CAF50",
            "line-width": 2,
            'line-opacity': 0.75
        }
    });

    map.addLayer({
        "id": "collision",
        "source": "collision",
        "type": "circle",
        "paint": {
            "circle-color": "#F44336",
            "circle-radius":4,
            "circle-opacity":0.5
        }
    });

    map.addLayer({
        "id": "collisionSnap",
        "source": "collisionSnap",
        "type": "circle",
        "paint": {
            "circle-color": "#2196f4",
            "circle-radius":4,
            "circle-opacity":0.5
        }
    });

});
