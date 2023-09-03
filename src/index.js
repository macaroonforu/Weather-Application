import forecast from "./forecast.js"; 
import hourly from "./hourly.js"; 
import current from "./current.js"; 

const button = document.getElementById("searchButton"); 
button.addEventListener("click", search); 
function search(){
    console.log("hi"); 
    const searchTerm = document.getElementById("citySearch").value.trim().toLowerCase(); 
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=${searchTerm}&days=3&aqi=no&alerts=no`, {mode: 'cors'})
    .then(response => {
        if (!response.ok) {
        throw new Error('Server returned ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("fail").style.display="none"; 
        document.getElementById("success").style.display="initial";
        console.log(data); 
        forecast(data.forecast.forecastday);
        hourly(data.forecast.forecastday[0].hour); 
        current(data.current, data.location); 
    })
    .catch(error => {
        const infodiv = document.getElementById("success");
        infodiv.style.display="none";  
        document.getElementById("fail").style.display="initial"; 
        console.error('There was a problem with the Fetch operation:', error);
    });
}

function pageLoad(){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=toronto&days=3&aqi=no&alerts=no`, {mode: 'cors'})
    .then(response => {
        if (!response.ok) {
        throw new Error('Server returned ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("fail").style.display="none"; 
        document.getElementById("success").style.display="initial";
        console.log(data); 
        forecast(data.forecast.forecastday);
        hourly(data.forecast.forecastday[0].hour); 
        current(data.current, data.location); 
    })
    .catch(error => {
        const infodiv = document.getElementById("success");
        infodiv.style.display="none";  
        document.getElementById("fail").style.display="initial"; 
        console.error('There was a problem with the Fetch operation:', error);
    });
}

pageLoad(); 

