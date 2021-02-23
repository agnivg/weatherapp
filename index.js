const input=document.getElementById('city');
const btn=document.getElementById('btn')
btn.addEventListener("click",()=>{
    weather(input.value);
    document.querySelector('.weatherbody').style.display="block";
});

async function weather(city){
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b6cd943160bd123041643a126984a59&units=metric`);
    const jsdata=await data.json();
    console.log(jsdata);
    if(jsdata.cod=="404"){
        let error=document.getElementById('error');
        error.innerHTML=`Sorry!! the city's weather data is not available`;
        document.querySelector('.error').style.display="block";
        document.querySelector('.temp').style.display="none";
        document.querySelector('.location').style.display="none";
        document.querySelector('.minmax').style.display="none";
        document.querySelector('.windhumid').style.display="none";
        document.querySelector('.weather').style.display="none";
        document.querySelector('.weathericon').style.display="none";
        document.querySelector('.date').style.display="none";
    }
    else{
        document.querySelector('.error').style.display="none";
        document.querySelector('.temp').style.display="block";
        document.querySelector('.location').style.display="block";
        document.querySelector('.minmax').style.display="block";
        document.querySelector('.windhumid').style.display="block";
        document.querySelector('.weather').style.display="block";
        document.querySelector('.weathericon').style.display="block";
        document.querySelector('.date').style.display="block";
        let location=document.getElementById('location');
        location.innerHTML=`${jsdata.name}, ${jsdata.sys.country}`;
        let date=document.getElementById('date');
        const d=new Date();
        date.innerHTML=`${d.toDateString()}`;
        let temp=document.getElementById('temp');
        temp.innerHTML=`${jsdata.main.temp}&deg;C`;
        let minmax=document.getElementById('minmax');
        minmax.innerHTML=`Min: ${jsdata.main.temp_min}&deg;C Max: ${jsdata.main.temp_max}&deg;C`;
        let wind=document.getElementById('windhumid');
        wind.innerHTML=`Wind Speed: ${jsdata.wind.speed}m/s Humidity: ${jsdata.main.humidity}%`;
        let weather=document.getElementById('weather');
        const w=jsdata.weather[0].main
        weather.innerHTML=`${w}`;
        let wicon=document.getElementById('weathericon');
        if(w==='Clear'){
            wicon.innerHTML=`<i class="fas fa-sun fa-5x"></i>`;
        }
        else if(w==='Clouds'){
            wicon.innerHTML=`<i class="fas fa-cloud fa-5x"></i>`;
        }
        else if(w==='Rain'){
            wicon.innerHTML=`<i class="fas fa-cloud-rain fa-5x"></i>`;
        }
        else if(w==='Snow'){
            wicon.innerHTML=`<i class="fas fa-snowman fa-5x"></i>`;
        }
        else if(w==='Thunderstorm'){
            wicon.innerHTML=`<i class="fas fa-poo-storm fa-5x"></i>`;
        }
        else{
            wicon.innerHTML=`<i class="fas fa-cloud-sun fa-5x"></i>`;
        }
    } 
}