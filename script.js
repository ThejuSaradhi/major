const timeEl=document.getElementById('time');
const dateEl=document.getElementById('date');
const currentWeatherItemsEl=document.getElementById('current-weather-items');
const timezone=document.getElementById('time-zone');
const countryEl=document.getElementById('country');
const weatherForecastEl=document.getElementById('weather-forecast');
const currentTempEl=document.getElementById('current-temp');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const apikey='baa9cec4f9c897198ba46111423595e0';
setInterval(() => {
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const hoursIn12HrFormat= hour >= 13 ? hour%12 : hour;
    const minutes=time.getMinutes();
    const ampm= hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML=hoursIn12HrFormat + ':' + minutes + ' ' + `<spam id="am-pm">${ampm}</spam>`;
    dateEl.innerHTML=days[day] + ', ' + date + ' ' + months[month];
}, 1000);

getWeatherData();
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude}=success.coords;
        fetch( `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${apikey}`).then(res => res.json()).then(data =>{
            console.log(data)
            //showWeatherData(data);
        })
        
    })
}
    














/*
function showWeatherData(data){
    let {humidity,pressure,sunrise,sunset,wind_speed}=data.current;
    currentWeatherItemsEl.innerHTML=
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}</div>
    </div>
    <div class="weather-item">
    <div>Pressure</div>
    <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${sunrise}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${sunset}</div>
    </div>`;
}*/