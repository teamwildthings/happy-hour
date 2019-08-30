
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

$('#button').click(function () {
    $('.mapboxgl-ctrl-icon .mapboxgl-ctrl-geolocate')
});