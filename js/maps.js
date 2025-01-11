  document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([34.0522, -118.2437], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([34.0522, -118.2437]).addTo(map).bindPopup('Los Angeles');
  });
