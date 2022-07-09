const AppKey="e08622d35f7f8f32b6a52259dd56c88f";
const Base=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

let input=document.querySelector("#input");
let right=document.querySelector(".right");
console.log(right);
let cityName=document.querySelector(".cityName");

input.addEventListener("keyup",e=>{
    let value=e.target.value;
    if(e.key==="Enter"){
        getWeatherReport(value)
;    }
});
async function getWeatherReport(city){
    let Base_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${AppKey}`;
    let data=await fetch(Base_URL);
    let res= await data.json();
    let weatherData=res.weather;
    let output="";
    for(let weather of weatherData)
        {
        output+=`<p>WEATHER</P>
           <h1 id="city">${res.name}</h1>
            <h2 id="city">${Math.round(res.main.temp-273.15)}&deg;c </h2>
            <footer>
            <div class="main">
            <img src=http://openweathermap.org/img/w/${weather.icon}.png />
            ${weather.description}</div>
            <div class="main">${weather.main}</div>
            <div class="desc">${weather.description}</div>
            </footer>
            ` }
   
   // cityName.innerText=res.name;
    console.log(res);
    right.innerHTML=output;
}
function getCurrentPositions(city){
    let data=window.navigator.geolocation.getCurrentPosition(async({coords})=>{
        console.log(coords);
        let lat=coords.latitude;
        let long=coords.longitude;
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${AppKey}`;
        let data=await window.fetch(url);
        let res=await data.json();
        console.log(res);
        right.innerHTML=`<p>WEATHER</P>
        <h1 id="city">${res.name}</h1>
         <h2 id="city">${Math.round(res.main.temp-273.15)}&deg;c </h2>`
    })
}

window.addEventListener("DOMContentLoaded",getCurrentPositions)

























// const APP_KEY = "9649df39cd99e9596cbe37805655cc52"

// let input = document.querySelector("#input");
// let cityName = document.querySelector("#cityName");
// let temp = document.querySelector("#temp")

// input.addEventListener("keyup", e => {
//     let value = e.target.value;
//     console.log(e.target.value);
//     if(e.key === "Enter"){
//         getWeatherReport(value);
//     }
// });

// async function getWeatherReport(city){

//     let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}`

//     let data = await fetch(BASE_URL)
//     let res = await data.json()
//     // console.log(res);
//     let weatherData = res.weather;
//     let temp = '';
//     let output = "";
//     for(let weather of weatherData){
//         output += `
//         <h1 id="cityName">${res.name}</h1>
//         <h2 id="temp">${Math.round}(res.main.temp -273.15) &deg;c</h2>
//         <footer>
//         <div id="main">${weather.main}</div>
//         <div class="esc">${weather.description}</div>
//     </footer>

// `
//     }
//     template.innerHtml = output;
// }

// async function getCurrentPositions(city)
// {
//     let data = window.navigator.geolocation.getCurrentPosition(({ coords})=>
//     {
//         console.log(coords);
//         let lat = coords.latitude;
//         let long = coords.longitude;

//     let url = `https://api.openweathermsp.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APP_KEY}`
//     let data = window.fetch(url);
//     let res = data.json();
//     console.log(res);

//     });
// }
// getCurrentPositions();

