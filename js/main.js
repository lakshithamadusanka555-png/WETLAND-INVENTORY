// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("Wetland website loaded!");
    
    // Initialize map (centered on Sri Lanka)
    const map = L.map('map').setView([7.8731, 80.7718], 8);
    
    // Add map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Sample wetland data
    const wetlands = [
        {name: "Muthurajawela Marsh", lat: 6.9896, lng: 79.8767, type: "marsh"},
        {name: "Bundala National Park", lat: 6.1986, lng: 81.2194, type: "lagoon"},
        {name: "Maduganga Estuary", lat: 6.2833, lng: 80.05, type: "mangrove"},
        {name: "Negombo Lagoon", lat: 7.1833, lng: 79.8333, type: "lagoon"},
        {name: "Anawilundawa Sanctuary", lat: 7.6667, lng: 79.8167, type: "reservoir"}
    ];
    
    // Add markers to map
    wetlands.forEach(wetland => {
        const marker = L.marker([wetland.lat, wetland.lng]).addTo(map);
        marker.bindPopup(`<b>${wetland.name}</b><br>Type: ${wetland.type}`);
    });
    
    // Button functions
    window.showMangroves = function() {
        alert("This would filter to show only mangrove wetlands");
    }
    
    window.showAll = function() {
        alert("Showing all wetlands");
    }
    
    window.centerMap = function() {
        map.setView([7.8731, 80.7718], 8);
    }
    // Add hover effect to wetland items
document.querySelectorAll('.wetland-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Click to show more info
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const area = this.querySelector('p:nth-child(2)').textContent;
        const types = this.querySelector('p:nth-child(3)').textContent;
        
        alert(`${title}\n\n${area}\n${types}\n\nClick 'OK' to close.`);
    });
});
});