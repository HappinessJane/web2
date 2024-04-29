document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
        center: [20, 0], // Centers the map so the whole world shows
        zoom: 2, // Zoom level adjusted to fit the world map
        minZoom: 2,
        maxZoom: 5, // Prevent zooming out too far
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
});
