
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


    var customData = {
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "title": "Pinch Boil House",
                    "address": "214 Broadway St, San Antonio, Tx 78205",
                    "phone": "210-257-5152",
                    "description": "Blah Blah Blah"
                },
                "geometry": {
                    "coordinates": [
                        -98.4958736,
                        29.4259826

                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Chris Madrids San Antonio",
                    "address": "600 N Presa St, San Antonio, Tx 78205",
                    "phone": "210-267-9885",
                    "description": "Blah Blah Blah"
                },
                "geometry": {
                    "coordinates": [
                        -98.5096223,
                        29.4637981

                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Jet-Setter",
                    "address": "229 E Houston St #10, San Antonio, Tx 78205",
                    "phone": "210-272-0457",
                    "description": "Blah Blah Blah"
                },
                "geometry": {
                    "coordinates": [
                        -98.4924166,
                        29.4266195

                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Grant Park",
                    "description": "A downtown park that is the site of many of Chicago's favorite festivals and events"
                },
                "geometry": {
                    "coordinates": [
                        -87.619185,
                        41.876367
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Humboldt Park",
                    "description": "A large park on Chicago's northwest side"
                },
                "geometry": {
                    "coordinates": [
                        -87.70199,
                        41.905423
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Douglas Park",
                    "description": "A large park near in Chicago's North Lawndale neighborhood"
                },
                "geometry": {
                    "coordinates": [
                        -87.699329,
                        41.860092
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Calumet Park",
                    "description": "A park on the Illinois-Indiana border featuring a historic fieldhouse"
                },
                "geometry": {
                    "coordinates": [
                        -87.530221,
                        41.715515
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Jackson Park",
                    "description": "A lakeside park that was the site of the 1893 World's Fair"
                },
                "geometry": {
                    "coordinates": [
                        -87.580389,
                        41.783185
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "title": "Columbus Park",
                    "description": "A large park in Chicago's Austin neighborhood"
                },
                "geometry": {
                    "coordinates": [
                        -87.769775,
                        41.873683
                    ],
                    "type": "Point"
                }
            }
        ],
        "type": "FeatureCollection"
    };




    function forwardGeocoder(query) {
        var matchingFeatures = [];
        for (var i = 0; i < customData.features.length; i++) {
            var feature = customData.features[i];
            // handle queries with different capitalization than the source data by calling toLowerCase()
            if (feature.properties.title.toLowerCase().search(query.toLowerCase()) !== -1) {
                // add a tree emoji as a prefix for custom data results
                // using carmen geojson format: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
                feature['place_name'] = '🍻 ' + feature.properties.title;
                feature['center'] = feature.geometry.coordinates;
                feature['place_type'] = ['park'];
                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }



// Search function
    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: forwardGeocoder,
        zoom: 14,
        placeholder: "Enter search e.g. Lincoln Park",
        mapboxgl: mapboxgl
    }));

    // Marker and PopUp function
    function geoPen(object){

        // Marker
        var marker = new mapboxgl.Marker()
        // marker.setLngLat([-98.4916, 29.4260]); //Alamo location
            .setLngLat(object.geometry.coordinates)
            // .setPopup(popUp)
            .addTo(map);


        // PopUp
        var popUp = new mapboxgl.Popup()
            .setHTML(object.properties.title + "<br>" + object.properties.address + "<br>" + object.properties.phone + "<br>" + object.properties.description);

        marker.setPopup(popUp);

    }

var feature = customData.features;

    feature.forEach(geoPen);

    feature.forEach(function (bar) {
        geoPen(bar)

    });


    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));