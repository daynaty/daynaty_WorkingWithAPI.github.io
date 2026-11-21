let apiURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=rain";


fetch (apiURL)
    .then((Response) => Response.json())
    .then((data) => {
       let rain = data.current.rain;

document.querySelector ("#rain").textContent = rain;

        if (rain == 0){
            document.body.className = "noRain";

            document.querySelector("#message").textContent = "There is no chance of rain right now.";
        }
        
        else if (rain < 10) {
            document.body.className = "mildRain";

            document.querySelector("#message").textContent = "There is going to be mild rain. Better carry an umbrella!";
        }

        else {
            document.body.className = "veryRainy";

            document.querySelector("#message").textContent = "It is going to be very rainy, stay inside if possible!";
        }
    
    
    
    });