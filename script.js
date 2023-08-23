

// // let url = "https://catfact.ninja/fact";
//  function request(){
//   try{
//     // let configer = {headers: { Accept: "application/JSON"}};
//     let res = await axios.get(url);
//     console.log(res);
//     // console.log(res.data.fact);
//   }catch(e){
//     console.log("error is",e);
//   }
// }
// call();

// let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//   // let inp = document.querySelector("input");
//   let item = document.querySelector(".item")
//  item.innerText= getData();
  

// })


// let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
// async function getData(){
//   try{
//     // let configer = { headers: { Accept:"Application/JSON"}};
//     let res = await axios.get(url);
//     console.log(res.categories);
//   }catch(e){
//     console.log(e);
//   }
// function call(){
//   let inp = document.querySelector("input").value.trim();

// }

let date = document.querySelector(".date");
let time = document.querySelector(".time");



let now = new Date();
date.innerText = now.toDateString();

setInterval(()=>{
  let activeTime = new Date();
  time.innerText = activeTime.toLocaleTimeString();
},1000);


const btn = document.querySelector("button");
const inp = document.querySelector("input");
let temp = document.querySelector(".temp");
let cloudy = document.querySelector(".cloudy");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind_speed");
let env = document.querySelector(".clouds");
let cityname = document.querySelector(".cityname");

async function weather(city){
try{
  const api_key = "5331320bbfd6b553d5f674df559a10bc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then(response=>response.json());
  console.log(weather_data);

  temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}`;
  cloudy.innerText = `${weather_data.weather[0].description}`
  humidity.innerText = `${weather_data.main.humidity}%`;
  wind_speed.innerText = `${weather_data.wind.speed}km/H`;
  cityname.innerText = `${inp.value} `;
//  if(inp.value==""){
//   temp.innerHTML="0";
//   humidity.innerText="0%";
//   wind_speed.innerText="0 Km/H";
//   cityname.innerText="City";

//  }  

switch (weather_data.weather[0].main){
  case 'overcast clouds':
      env.src="/image/clouds.png";
      break;
  case 'Clouds':
      env.src="/image/clouds.png";
      break;
  case 'clear sky':
      env.src="/image/clear1.png";
      break;
  case 'Rain':
      env.src="/image/rain.png";
      break;
  case 'Haze':
      env.src="/image/mist.png";
      break;
  case 'Snow':
      env.src="/image/snow.png";
      break;
}

}catch(e){
  console.log(e);
  console.log("error fetched");
}
}


btn.addEventListener("click",()=>{
  weather(inp.value);
  // inp.value="";
})

// if(inp.value==""){
//   temp.innerHTML="0";
//   humidity.innerText="0%";
//   wind_speed.innerText="0 Km/H";
//   cityname.innerText="City";

//  }  ;











