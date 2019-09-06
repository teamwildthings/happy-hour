
// map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true
// }));
//
$('#button').click(function () {
navigator.geolocation.getCurrentPosition(position => {
    const userCoordinates = [position.coords.longitude, position.coords.latitude];
    map.addSource("user-coordinates", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: userCoordinates
            }
        }
    });
    map.addLayer({
        id: "user-coordinates",
        source: "user-coordinates",
        type: "circle"
    });
    map.flyTo({
        center: userCoordinates,
        zoom: 14
    });
    this.setState({
        resolvingLocation: false,
        userCoordinates
    });
});
});

