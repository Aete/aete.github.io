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
const urlmatched = 'data/sstreet_matched.geojson';
const urlunmatched = 'data/sstreet_unmatched.geojson';
const urlnode = 'data/sstreet_intersection.geojson';
const urllionnode = 'data/lion_node_man.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('matched').setData(urlmatched);
        map.getSource('unmatched').setData(urlunmatched);
        map.getSource('node').setData(urlnode);
        map.getSource('node').setData(urllionnode);

    }, 2000);

    // add sources to the Map
    map.addSource('matched', { type: 'geojson', data:urlmatched, 'generateId': false});
    map.addSource('unmatched', { type: 'geojson', data:urlunmatched, 'generateId': false});
    map.addSource('node', { type: 'geojson', data:urlnode, 'generateId': false});
    map.addSource('lionnode', { type: 'geojson', data:urllionnode, 'generateId': false});
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
            'line-opacity': 0.75
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
            'line-opacity': 0.75
        }
    });

    map.addLayer({
        "id": "node",
        "source": "node",
        "type": "circle",
        "paint": {
            "circle-color": "#2196F3",
        }
    });



    map.on('click', 'matched', function(e) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const shstGeoid = e.features[0].properties['shstGeometryId'];
        const shstRefid = e.features[0].properties['shstReferenceId'];
        const lionSegmentid = e.features[0].properties['pp_segmentid'];
        const text = `<p><b>SharedStreet Geo ID</b>: ${shstGeoid}<br><b>SharedStreet Ref ID</b>: ${shstRefid}<br> <b>LION segment id</b>: ${lionSegmentid}</p>`;
        const lat =  (coordinates[0][0] + coordinates[1][0])/2;
        const lng =   (coordinates[0][1] + coordinates[1][1])/2;
        new mapboxgl.Popup()
            .setLngLat([lat,lng])
            .setHTML(text)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'matched', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

// Change it back to a pointer when it leaves.
    map.on('mouseleave', 'matched', function() {
        map.getCanvas().style.cursor = '';
    });
});
