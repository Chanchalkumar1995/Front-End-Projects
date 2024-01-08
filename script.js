
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

    async function checkWeather(city){
      const response= await fetch("https://api.openweathermap.org/data/2.5/weather?appid=4f0c74ffbc0f92b3614bc52902a8fbcd&Units=Metrics&q=" + city );

      let data= await response.json();
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)/10 + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
    // 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en';
    //https://api.openweathermap.org/data/2.5/weather?appid=4f0c74ffbc0f92b3614bc52902a8fbcd&Units=Metrics&q=