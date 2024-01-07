import forecast from "./forecast.js"; 
import hourly from "./hourly.js"; 
import current from "./current.js"; 
//import plusSlides from "./plusSlides.js"; 
let slideIndex = 1; 
const button = document.getElementById("searchButton"); 
button.addEventListener("click", search); 

//Revisit this later to search when enter is pressed in addition to clicking on the icon 
/*button.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      search(); 
    }
});*/

function search(){
    console.log("hi"); 
    const searchTerm = document.getElementById("citySearch").value.trim().toLowerCase(); 
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=${searchTerm}&days=3&aqi=no&alerts=no`, {mode: 'cors'})
    .then(response => {
        if (!response.ok) {
        throw new Error('Server returned ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("fail").style.display="none"; 
        console.log(data); 
        forecast(data.forecast.forecastday);
        hourly(data.forecast.forecastday[0].hour); 
        current(data.current, data.location); 
        slideIndex =1; 
        showSlide(slideIndex); 
        document.querySelector(".prev").addEventListener("click", function() {plusSlides(-1);}); 
        document.querySelector(".next").addEventListener("click", function() {plusSlides(1);});
        document.getElementById("success").style.display="initial";
    })
    .catch(error => {
        const infodiv = document.getElementById("success");
        infodiv.style.display="none";  
        document.getElementById("fail").style.display="initial"; 
        console.error('There was a problem with the Fetch operation:', error);
    });
}

function pageLoad(){
    document.querySelector("body").style.display="none"; 
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=toronto&days=3&aqi=no&alerts=no`, {mode: 'cors'})
    .then(response => {
        if (!response.ok) {
        throw new Error('Server returned ' + response.status); 
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("fail").style.display="none"; 
        //console.log(data); 
        forecast(data.forecast.forecastday);
        console.log(slideIndex); 
        hourly(data.forecast.forecastday[0].hour); 
        showSlide(1); 
        document.querySelector(".prev").addEventListener("click", function() {plusSlides(-1);}); 
        document.querySelector(".next").addEventListener("click", function() {plusSlides(1);});
        current(data.current, data.location); 
        document.querySelectorAll(".pl").forEach(item =>{
            item.style.display="initial"; 
        })
    })
    .catch(error => {
        const infodiv = document.getElementById("success");
        infodiv.style.display="none";  
        document.getElementById("fail").style.display="initial"; 
        console.error('There was a problem with the Fetch operation:', error);
    });
}

function plusSlides(n) {
    showSlide(slideIndex +=n); 
}

function currentSlide(n) {
    showSlide(slideIndex = n); 
}

function showSlide(n) { 
    let slides = document.getElementsByClassName("rowDiv"); 
    console.log(n); 
    console.log(slides); 
    if(n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length; 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(n); 
    slides[slideIndex-1].style.display ="grid";
}

pageLoad(); 


