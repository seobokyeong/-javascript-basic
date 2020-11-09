const weather = document.querySelector('.weather')
const API = 'a8ac2c8c0e88a4ff7de33d0bce5d5d12'

// a8ac2c8c0e88a4ff7de33d0bce5d5d12
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const name = json.name
      const temp = json.main.temp
      weather.innerText = `${temp}도 ${name}`
    })
}

function saveCoords(coords) {
  localStorage.setItem('coords', JSON.stringify(coords))
}

function geoSuccess(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  const coords = {
    latitude,
    longitude
  }

  saveCoords()
  getWeather(latitude, longitude)
}

function geoError() {
  console.log('위치 정보를 허용하지 않았습니다.')
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}

// https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API

function loadCoords() {
  // const loadedCords = localStorage.getItem('cords')
  askCoords()
}

function init() {
  loadCoords()
}

init()
