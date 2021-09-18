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
        .then(function (webApiData) {
            const data = {
                date: new Date().toDateString().slice(0, -5),
                personalFeeling,
                // store data in temp key only if city is found (code = 200 means success) and temp exists
                temp: (webApiData.cod === 200 && webApiData.main.temp) ? webApiData.main.temp : undefined
            };
            return postData('/entries', data);
        }).then(function (data) {
            return getData('/entries')
        }).then(function (data) {
            if (!data) {
                console.log('error', 'data after get request to our server is ' + data);
                return;
            }

            updateUI(data);
        });
}

/* Function to GET Web API Data*/
async function getWebApiData(zip, baseUrl = BASE_URL, apiKey = API_KEY) {
    const response = await fetch(baseUrl + `?zip=${zip}&appid=${apiKey}&units=imperial`);
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
async function getData(url = '') {
    const response = await fetch(url);

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

function updateUI(data) {
    const dateElement = document.querySelector('#date')
    const tempElement = document.querySelector('#temp');
    const contentElement = document.querySelector('#content');

    dateElement.innerHTML = `Date: ${data.date ? data.date : 'NA'}`;
    tempElement.innerHTML = `Temperature: ${data.temp ? data.temp : 'NA'}`;
    contentElement.innerHTML = `Your Personal Feeling: ${data.personalFeeling ? data.personalFeeling : 'NA'}`;
}
