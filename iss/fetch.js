let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocation = document.querySelector('#time')

let update = 10000
let issMarker 
// get iss picture and set size
let issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [25, 25]
});



let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


iss() // call function 1 time to start
setInterval(iss, update) // 10 seconds

// long and clear code:
function iss() {
    fetch(url).then( (res) => {
        return res.json() // process response into JSON, the return promise will be sent to the next "then" block
    }).then( (issData) => {
        console.log(issData) // TODO - display data on web page
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        //create marker if it doesn't exist
        //move marker if it exists

        if (!issMarker) {
            //create marker
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocation.innerHTML = `This data was fetched at ${now}`
    }).catch( (err) => {
        console.log('ERROR!', err)
    })
}



// loop over that array to create the markers and popups
// bridges.forEach(function(usBridges) {
//     // todo draw a marker
//     let markerText = `${usBridges.name}<br> Span: ${usBridges.span} meters`
//     L.marker(usBridges.location, {icon: issIcon} ).bindPopup(markerText).addTo(map)
// })


//short code
// fetch(url).then( res => res.json()
// ).then( issData => console.log(issData)
// ).catch( err => console.log('ERROR!', err))

