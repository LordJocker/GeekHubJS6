var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.4436868, lng: 32.0607233},
        zoom: 18
    });

    var geocoder = new google.maps.Geocoder();

    $('#submit').click(function () {
        geocodeAddress(geocoder, map);
    });

    $('#address').keypress(function (e) {
        if (e.keyCode === 13)
            geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            $('#lat').text('Latitude: ' + results[0].geometry.location.lat().toFixed(5));
            $('#lng').text('Longitude: ' + results[0].geometry.location.lng().toFixed(5));

            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        }
    });
}