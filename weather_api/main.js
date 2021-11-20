// Function to request API data.
async function getWeather(city_name){
    // let city_name = 'Boston';
    let API_key = '6421cde4337d2f7d36f68e90cf596c31';
    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
    let result = await fetch(request);
    let response = await result.json();
    // console.log(response);
    // console.log(response.coord.lon)
    // console.log(response.main.temp_max)
    // console.log((response.main.temp_max - 273).toFixed(1))
    // console.log(((response.main.temp_max - 273)*(9/5)+32).toFixed(1))
    // console.log('Temperature (Celsius)', (response.main.temp_max - 273).toFixed(1))
    // console.log('Temperature (Fahrenheit)', ((response.main.temp_max - 273)*(9/5)+32).toFixed(1))
    // console.log()
    document.getElementById('test2').innerHTML = 'High: ';
    document.getElementById('test3').innerHTML = `${(response.main.temp_max - 273).toFixed(1)}\u00B0C`;
}

getWeather('Boston')

// getWeather('Boston', '6421cde4337d2f7d36f68e90cf596c31')

document.getElementById('test').innerHTML = "Hello World!";

// Create variable for form
const form = document.querySelector('#testForm')
// console.log(form)

// Event Listener for Form Submission
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // let query_city = document.querySelector('#city')
    // console.log(query_city)
    console.log(event) // Console logging the event allows one to determine event.path.
    let city = event.path[0][0].value
    console.log(`Good morning, ${city}!`)
    getWeather(`${city}`)
})