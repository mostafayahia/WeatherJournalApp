// Personal API Key for OpenWeatherMap API
const API_KEY = 'INSERT YOUR API KEY HERE';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather/';

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', generateBtnHandler);


/* Function called by event listener */
function generateBtnHandler(event) {
    event.preventDefault();

    const zip = document.querySelector('#zip').value;

    getWebApiData(zip)
        .then(function (data) {
            console.dir(data)
        })
}

/* Function to GET Web API Data*/
async function getWebApiData(zip, baseUrl = BASE_URL, apiKey = API_KEY) {
    const response = await fetch(baseUrl + `?zip=${zip}&appid=${apiKey}`);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error)
    }
}


/* Function to GET Project Data */
