function hourly(data){
    console.log("Hourly Data", data); 

    const hourly_grid = document.getElementById("hourly-grid"); 
    hourly_grid.innerHTML=''; 
    for(const hour of data){
        const hourdiv = document.createElement('div'); 
        hourdiv.innerHTML = 
                    `<p>${hour.time} </p>
                    <p>${hour.temp_c} &#176; C</p>
                    <p>${hour.condition.text}</p>
                    <img src=${hour.condition.icon}>
                    `
        hourly_grid.appendChild(hourdiv); 
    }

}

export default hourly; 