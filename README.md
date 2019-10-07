# Cinema App
This app allow to check which films are being played in cinemas, read more about them as well as book seats.

## Table of Contents
- [NPM packages and versions](#npm-packages-and-versions)
- [API](#api)
- [How to use](#how-to-open)
- [Usage](#usage)
  * [Program](#program)
  * [Film description](#film-description)
  * [Booking seats](#booking-seats)
  * [Prices](#prices)

## NPM packages and versions
- [config:](https://www.npmjs.com/package/config) 3.2.2
- [cors:](https://www.npmjs.com/package/cors) 2.8.5
- [express:](https://www.npmjs.com/package/express) 4.17.1
- [express-cache-control:](https://www.npmjs.com/package/express-cache-control) 1.0.2
- [express-cache-controller](https://www.npmjs.com/package/express-cache-controller): 1.1.0
- [joi:](https://www.npmjs.com/package/joi) 14.3.1
- [json-aggregate:](https://www.npmjs.com/package/json-aggregate) 0.1.0
- [mongoose:](https://www.npmjs.com/package/mongoose) 5.7.1
- [node-fetch:](https://www.npmjs.com/package/node-fetch) 2.6.0
- [node-schedule:](https://www.npmjs.com/package/node-schedule) 1.3.2
- [winston:](https://www.npmjs.com/package/winston) 3.2.1

## API
External APIs used in the project:
- [OMDb](http://omdbapi.com/)
- [Cinelist](https://api.cinelist.co.uk/)

A custom API was made for this project to provide data combined from 2 separate sources. This API provides repertoir for all supported cinemas. You can request seances for each cinema 7 days ahead with crucial information about each movie that will be played at given day and hour.

The server for this API was set at [Heroku](heroku.com) and can be accessed [here](https://vast-citadel-46907.herokuapp.com/)

Crucial endpoints are:
- api/cinemas - get list of all supported cinemas
- api/cinemas/:id - get repertoir of specified cinema
- api/movies - get our movie database
- api/movies/:id - get information about specified movie
- api/seances/:id - get information about specified seance

## How to open
Link to application: https://junasia.github.io/CinemaApp/

## Usage
### Program
Check program for your cinema in particular day. Above it, you can find our recommendations.
![image](https://user-images.githubusercontent.com/53261107/66275361-26766380-e888-11e9-93ad-b5712f33e397.png)

### Film description
Read film details.
![image](https://user-images.githubusercontent.com/53261107/66275421-8ff67200-e888-11e9-8b36-4f4b4582b826.png)

### Booking seats
Book seat for the film.
![image](https://user-images.githubusercontent.com/53261107/66275591-69393b00-e88a-11e9-9e67-cb4edf94d8f3.png)

### Prices
Check out current prices.
![image](https://user-images.githubusercontent.com/53261107/66275336-d3041580-e887-11e9-8c9f-f42c06407524.png)
