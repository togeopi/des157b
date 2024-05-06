(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([34.280830, -119.293114], 13);
    var marker = L.marker([34.280830, -119.293114]).addTo(map);
    var popup = L.popup();
    var circle = L.circle([34.280830, -119.293114], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    var circle1 = L.circle([34.280830, -119.293114], {
        color: 'green',
        fillColor: '#ffff',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    circle1.bindPopup("I am also a circle.");
    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
}());