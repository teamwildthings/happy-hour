// MapBox
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    // center: [-122.420679, 37.772537] // San Francisco
    center: [-98.4916, 29.4252] // San Antonio
    // center: [-77.0369, 38.9072] // Washington D.C
    // center: [-97.7718784, 31.0810943] // Killeen, TX


});



// Bar Object
var bars = [
    {
        name: "Jet-Setter",
        address: "229 E Houston St #10, San Antonio, Tx 78205",
        phone: "210-272-0457",
        happyHour: "Blah Blah Blah"
    },
    {
        name: "Chris Madrids San Antonio",
        address: "600 N Presa St, San Antonio, Tx 78205",
        phone: "210-267-9885",
        happyHour: "Blah Blah Blah"
    },
    {
        name: "Pinch Boil House",
        address: "214 Broadway St, San Antonio, Tx 78205",
        phone: "210-257-5152",
        happyHour: "Blah Blah Blah"
    }
];