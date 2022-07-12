const express = require('express');
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request.js')
 

const app= express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.render('index', {weather: null, error: null})
})

app.post('/', async (req, res) =>{
    const {city} = req.body
    weatherRequest(city)

    const {weather, error} = await weatherRequest(city)
    res.render('index',{weather, error})

    
})



app.listen(3000, ()=> {console.log('server has started on port 3000...')});