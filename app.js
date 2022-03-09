const express = require('express')
const app = express()
const port = 3000
const request = require('request')

const apiKey = '6f68aa625e5aab1eb88f08369c90bed8'
const city = 'sogamoso'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
        console.log(message);
    }
  });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))