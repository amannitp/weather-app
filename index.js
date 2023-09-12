const apiKey="6b1fadd4288d9994d80acf2b746513e4"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore"
const url='https://api.openweathermap.org/data/2.5/weather?q=india&appid=6b1fadd4288d9994d80acf2b746513e4&units=metric'
async function getWeatherInfo(){
    try{
        const response=await fetch(apiUrl +`&appid=${apiKey}`)
       // console.log( typeof response)
        const data=await response.json()

        console.log(data.wind.speed)

    }catch(error){
        console.log(error)

    }
    
}

getWeatherInfo()

console.log()