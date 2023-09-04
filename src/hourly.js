const {format} = require('date-fns');


function hourly(data){
    //console.log("Hourly Data", data); 

    const hourly_grid = document.getElementById("hourly-grid"); 
    hourly_grid.innerHTML=''; 

    for(let i=0; i<4;i++){
        const rowDiv = document.createElement('div'); 
        rowDiv.classList.add('rowDiv'); 
        for(let j=(6*i); j<(6*(i+1)); j++){
            const squareDiv = document.createElement('div'); 
            squareDiv.classList.add("squareDiv"); 
            squareDiv.innerHTML = `<p style="font-size:1.5em;">${format(new Date(data[j].time),'p')}</p>
            <p>${data[j].temp_c} &#176; C</p>
            <p>${data[j].condition.text}</p>
            <img src=${data[j].condition.icon}>
            `
            rowDiv.appendChild(squareDiv); 
        }
        hourly_grid.appendChild(rowDiv); 
    }
    const buttonDiv = document.createElement('div'); 
    buttonDiv.innerHTML = `<button class="arrow prev"><span class="iconify" data-icon="emojione:left-arrow" width="48" height="48" data-inline="false"></span></button>
    <button class="next arrow"><span class="iconify front-arrow" data-icon="emojione:right-arrow" width="48" height="48" data-inline="false"></span></button>`
    buttonDiv.classList.add("buttonDiv"); 
    hourly_grid.appendChild(buttonDiv); 
    
    /*const dotDiv = document.createElement('div'); 
    dotDiv.innerHTML = `<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>`
    
    hourly_grid.appendChild(dotDiv);*/
    /*document.querySelector(".prev").addEventListener("click", plusSlides(-1)); 
    document.querySelector(".next").addEventListener("click", plusSlides(1)); */
}








export default hourly; 