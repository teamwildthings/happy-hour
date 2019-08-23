// MapBox
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 6,
    // center: [-122.420679, 37.772537] // San Francisco
    center: [-98.4916, 29.4252] // San Antonio
    // center: [-77.0369, 38.9072] // Washington D.C
    // center: [-97.7718784, 31.0810943] // Killeen, TX


});