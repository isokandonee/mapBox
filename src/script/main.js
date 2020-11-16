    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNva2FuZG9uZSIsImEiOiJja2hqbWVyeWsxY2V0MnltY3JwdWc3YnVoIn0.1Z4EAVZ0XfBikaGVpXLpvA';
// var map;
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true});

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude], 15);
};

function errorLocation(){
    setupMap([-1, 30], 1);
};

function setupMap(center, zoom){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, // starting position [lng, lat]
        zoom: zoom // starting zoom
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // map.addControl(
    //     new MapboxDirections({
    //     accessToken: mapboxgl.accessToken
    //     }),
    //     'top-left'
    //     );
    var dir = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
    map.addControl(dir, 'top-left');


};

