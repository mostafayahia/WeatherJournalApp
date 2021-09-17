# Weather-Journal App Project
This project is an implementation for what we have learned in Web APIs and Asynchronous Applications Udacity Course.<br>
The goal is to to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Table of Contents
* [Starter Code](#starter-code)
* [Project Structure](#project-structure)
* [Run App](#run-app)

## Starter-Code
You can have a copy of the starter code of the project from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app).
## Dependencies
I've done this project using the help of [MDN Web Docs](https://developer.mozilla.org/en-US/) & [Stack Overflow](https://stackoverflow.com/).<br><br>

## Project-Structure
The structure of the project as follow:
```
server.js
website
- styles.css
- index.html
- app.js
README.md
```
Most of our work inside `server.js` (server side code) and `website/app.js` (client side code).

## Run-App
- Please, make sure to put **your own api key** inside `website/app.js`, you can create account and get one from [OpenWeatherMap](https://openweathermap.org/).
- Please, make sure you have already installed these packages (express, cors, body-parser). you can install them easily by running the following command 
```
npm install <your-package-name>
```
- Please, make sure the server is running by running the following command in the root directory
```
node ./server.js
```
- Default url: `http://localhost:3000`
