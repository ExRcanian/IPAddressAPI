async function getLocation(ip) {
    const location = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_6ofPlwVqae8mh1YtOZYJsPHNlWo1j&ipAddress=${ip}`)
    const locationData = await location.json()
    document.querySelector('.ipAddress').innerHTML = locationData.ip
    document.querySelector('.locationInfo').innerHTML = `${locationData.location.city}, ${locationData.location.region}, ${locationData.location.postalCode}`
    document.querySelector('.timezoneInfo').innerHTML = `UTC${locationData.location.timezone}`
    document.querySelector('.ISPInfo').innerHTML = locationData.isp
    
    let lat = locationData.location.lat
    let lng = locationData.location.lng
    
    var map = L.map('map').setView([lat, lng], 13);
    var marker = L.marker([lat, lng]).addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
}

getLocation('');

document.querySelector('.IPSearch').addEventListener('click', () => {
    map = map.remove()
    getLocation(document.querySelector('.searchInput').value) 
})


