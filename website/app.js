// Personal API Key for OpenWeatherMap API
const API_KEY = 'INSERT YOUR API KEY HERE';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather/';

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', generateBtnHandler);


/* Function called by event listener */
function generateBtnHandler(event) {
    event.preventDefault();

    const personalFeeling = document.querySelector('#feelings').value;
    const zip = document.querySelector('#zip').value;

    getWebApiData(zip)
        .then(function (webApidata) {
            return postData('/entries', { date: 'Today', personalFeeling, temp: webApidata.main.temp });
        }).then (function (data) {
            console.log('data array after posting our data: ', data);
        });
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

/* Function to POST data */
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
}

/* Function to GET Project Data */
