function forecast(data){
    console.log("Three Day Forecast", data); 

    const three_day_grid = document.getElementById("three-day-grid"); 
    three_day_grid.innerHTML=''; 
    for(const day of data){
        const daydiv = document.createElement('div'); 
        daydiv.innerHTML = 
                    `<p>${day.date} </p>
                    <p>Average Temperature: ${day.day.avgtemp_c} &#176; C</p>
                    <p>${day.day.condition.text}</p>
                    <img src=${day.day.condition.icon}>
                    <p>Daily Maximum: ${day.day.maxtemp_c} &#176; C</p>
                    <p>Daily Minimum: ${day.day.mintemp_c} &#176; C</p>`
        three_day_grid.appendChild(daydiv); 
    }



}

export default forecast; 