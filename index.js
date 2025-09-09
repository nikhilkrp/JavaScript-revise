const apikey = "20bf1463eee8416354322c3f81b32f68"
         const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
         const searchBox = document.querySelector(".search input");
         const searchButton = document.querySelector(".search button");
         const weatherIcon = document.querySelector(".weather-icon")

         async function checkWeather(city) {
            const response = await fetch(apiURL +city +`&appid=${apikey}`)

            if(response==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
                
            }
            var data = await response.json();
            console.log(data); 
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+'°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed;

            if(data.weather[0]="Clouds"){
               weatherIcon.src='images/clouds.png'
            }
            else if(data.weather[0]="Clear"){
               weatherIcon.src='images/sun.png'
            }
            else if(data.weather[0]="Rain"){
               weatherIcon.src='images/rain.png'
            }
            else if(data.weather[0]="Drizzle"){
               weatherIcon.src='images/drizzle.png'
            }
            else if(data.weather[0]="Mist"){
               weatherIcon.src='images/mist.png'
            }

         }
         searchButton.addEventListener("click",()=>{
                 checkWeather(searchBox.value);
         })