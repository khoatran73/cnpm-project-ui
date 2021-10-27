let locations = [
    {
        id: 1,
        lat: 10.7327923,
        lng: 106.6970248,
        locationName: "Hồ Chí Minh",
        storeName: "Mkav Tea TP Hồ Chí Minh",
        address: "19 Nguyễn Hữu Thọ, phường Tân Phong, Quận 7, TP. Hồ Chí Minh",
        tel: "0865997531",
        time: "Thứ Hai - Chủ Nhật: 09h00 - 22h00"
    },
    {
        id: 2,
        lat: 13.0935826,
        lng: 109.1957302,
        locationName: "Phú Yên",
        storeName: "Mkav Tea Phú Yên",
        address: "Phú Yên",
        tel: "0865997531",
        time: "Thứ Hai - Chủ Nhật: 09h00 - 22h00"
    },
    {
        id: 3,
        lat: 10.0622913,
        lng: 105.0997919,
        locationName: "Kiên Giang",
        storeName: "Mkav Tea Kiên Giang",
        address: "ấp Tà Tây, TP Rạch Giá, Kiên Giang",
        tel: "0865997531",
        time: "Thứ Hai - Chủ Nhật: 09h00 - 22h00"
    }
    ,
    {
        id: 4,
        lat: 16.0536647,
        lng: 108.1847431,
        locationName: "Đà Nẵng",
        storeName: "Mkav Tea Đà Nẵng",
        address: "Đà Nẵng",
        tel: "0865997531",
        time: "Thứ Hai - Chủ Nhật: 09h00 - 22h00"
    }
]

let infoWindowContent = []


function showMap() {
    initMap(1)
    document.querySelector('#btn-search-location').addEventListener('click', function () {
        // return parseInt(document.querySelector("#map-select").value)
        const locationId = parseInt(document.querySelector("#map-select").value)
        initMap(locationId)
    })
}

function initMap(locationId) {
    let location = loadListLocation(locationId)

    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 15,
    })

    let marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: `
            <div class="map-marker">
                <h3>${location.storeName}</h3>
                <p>
                    <span>Địa chỉ</span> 
                    <span>${location.address}</span>
                <p>
                <p>
                    <span>Điện thoại</span> 
                    <span>${location.tel}</span>
                <p>
                <p>
                    <span>Giờ mở cửa</span> 
                    <span>${location.time}</span>
                <p>
                <a target="_blank" href="https://www.google.com/maps/place/${location.lat},${location.lng}">Chỉ đường</a>
            </div>
        `
    })
    
    let infoWindow = new google.maps.InfoWindow()

    google.maps.event.addListener(marker, "click", (function (marker) {
        infoWindowContent[location.id] = marker.getTitle()

        return function () {
            let content = marker.getTitle()
            infoWindow.setContent(content)
            infoWindow.open(map, marker)
        }
    })(marker))

    displayListStore(location, map, infoWindow, marker)
}

function loadListLocation(locationId) {
    let location = {}
    locations.forEach(loc => {
        if (loc.id === locationId) {
            location = loc
        }
    })

    return location
}

function displayListStore(location, map, infoWindow, marker) {
    let ul = `
        <h2>${location.locationName}</h2>
        <ul id="list-location">
            <li id="location">
                <h4>${location.storeName}</h4>
                <p>${location.address}</p>
            </li>
        </ul>
    `

    document.querySelector("#store-list").innerHTML = ul

    document.querySelector("#location").addEventListener("click", function () {
        map.setCenter({ lat: location.lat, lng: location.lng }, 15)
        infoWindow.setContent(infoWindowContent[location.id])
        infoWindow.open(map, marker)
    })
}


