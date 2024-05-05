const button = document.getElementById("btn");
const input = document.getElementById("city");

const Name = document.getElementById("name");
const Time = document.getElementById("time");
const Temp = document.getElementById("temp");

async function getData(cityName) {
      const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=USE YOUR API KEY&q=${cityName}&aqi=yes`        
      );
      return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result)
    Name.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    Time.innerHTML = result.location.localtime;
    Temp.innerText = `${result.current.temp_c} C`;
});




