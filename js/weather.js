const weather=document.querySelector(".weather span:first-child");
const city=document.querySelector(".weather span:last-child");
const API_KEY="69249c0763b654e288e785b8e88f029d";

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}℃`;
       
    });// 내가 열 필요없이 자바스크립트가 url 에 요청한거다.

}
function onGeoError(){
    alert("Can't find you. NO weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

