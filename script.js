async function getLocation() {
    const location = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_6ofPlwVqae8mh1YtOZYJsPHNlWo1j&ipAddress=8.8.8.8')
    const locationData = await location.json()
    console.log(locationData.ip)
    console.log(`${locationData.location.city}, ${locationData.location.region}`)
    console.log(locationData.timezone)
    console.log(locationData.isp)
}

getLocation();