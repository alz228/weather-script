const rp = require('request-promise')

module.exports = async function (city) {
    if (!city) {
        throw new Error('u must write some city')
    }

    const key = "9fa4e7834d4f463ad3227b4cbadc663a"
    const uri = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    const options = {
        uri,
        qs: {
            appid: key,
            q: city,
            units: 'imperial'

        },
        json: true

    }


try{
    // const response = await rp(options) 
    const response = await rp(options) 
    const celsius = (response.main.temp - 32) * 5/9
    // console.log(response)

    return{
        // weather: '',
        weather:`${response.name}: ${celsius.toFixed()}`,
        error: null
    }
}
catch(error){
    // console.log(error)
return{
    weather: null,
    error: error.error.message
}
}
   

}

