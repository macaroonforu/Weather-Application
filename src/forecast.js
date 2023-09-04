const {format} = require('date-fns');
function forecast(data){
    //console.log("Three Day Forecast", data); 
    const three_day_grid = document.getElementById("three-day-grid"); 
    three_day_grid.innerHTML=''; 

    for(const day of data){
        const daydiv = document.createElement('div'); 
        daydiv.classList.add("day"); 
        daydiv.innerHTML = 
                    `<p style="font-weight:bold;font-size:1.5em;">${format(new Date(day.date),'EEEE')} </p>
                    <p style="font-size:1.25em;">Average Temperature: ${day.day.avgtemp_c} &#176; C</p>
                    <p style="font-size:1.25em;">${day.day.condition.text}</p>
                    <img src=${day.day.condition.icon}>
                    <p style="font-size:1.25em;"><span class="iconify" data-icon="fxemoji:thermometer" data-inline="false"></span>Daily Maximum: ${day.day.maxtemp_c} &#176; C</p>
                    <p style="font-size:1.25em;"><span class="iconify" data-icon="icon-park:thermometer" data-inline="false"></span>Daily Minimum: ${day.day.mintemp_c} &#176; C</p>`
        three_day_grid.appendChild(daydiv); 
    }


    

}

export default forecast; 