let weather={
    apikey:"dca8ae3a6195965895aec5de78548c85",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));

    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity }= data.main;
        const { speed }= data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText= "weather in " + name;
        // document.querySelector(".icon").src= "";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText= temp + "°C";
        document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText= "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage="url('')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search(); 
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
weather.fetchWeather("denver");