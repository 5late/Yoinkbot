const commando = require('discord.js-commando');
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '?'
const path = require('path')
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))
const apitoken = config.apitoken
const axios = require('axios')

module.exports = class WeatherCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weather',
            group: 'misc',
            memberName: 'weather',
            description: 'Get the weather for a specific city.',
        })
    }
    async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const dated = new Date().toLocaleString();


    if(!args.length) return msg.reply('Please provide a city name!')
    const exampleEmbed = (
        temp, 
        maxTemp,
        feels_like,
        minTemp,
        pressure,
        humidity,
	    wind,
	    cloudness,
	    icon,
	    author,
	    profile,
        cityName,
        country,
        coord,
    ) =>
   
        new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hello ${author}`, profile)
            .setTitle(`Current Temperature is ${temp}\u00B0 C in ${cityName}, ${country}`)
            .addField(`Feels Like 💁: `, `${feels_like}\u00B0 C`, true)
		    .addField(`High🔥:`, `${maxTemp}\u00B0 C`, true)
		    .addField(`Low❄️:`, `${minTemp}\u00B0 C`, true)
		    .addField(`Humidity💧:`, `${humidity} %`, true)
		    .addField(`Wind Speed💨:`, `${wind} m/s`, true)
		    .addField(`Pressure🗜️:`, `${pressure} hpa`, true)
            .addField(`Cloudiness☁️:`, `${cloudness}`, true)
            .addField(`Coordinates🧭:`, `${coord}`, true)
		    .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
            .setFooter('Xurxx#7879 | ?owner');
            

            axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apitoken}`
            )
            .then(response => {
                let apiData = response;
                let currentTemp = Math.ceil(apiData.data.main.temp)
                let feelsLike = apiData.data.main.feels_like;
                let maxTemp = apiData.data.main.temp_max;
                let minTemp = apiData.data.main.temp_min;
                let humidity = apiData.data.main.humidity;
                let wind = apiData.data.wind.speed;
                let author = msg.author.username
                let profile = msg.author.displayAvatarURL();
                let icon = apiData.data.weather[0].icon
                let cityName = args
                let country = apiData.data.sys.country
                let pressure = apiData.data.main.pressure;
                let cloudness = apiData.data.weather[0].description;
                let coordinates = [apiData.data.coord.lon, apiData.data.coord.lat]
                msg.channel.send(exampleEmbed(currentTemp, feelsLike, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country, coordinates));
            }).catch(err => {
                console.log(err)
                msg.reply(`The city you entered doesn't seem to be correct. Try again!`)
            })


    
    console.log(`${msg.author.tag} used the weather command to search for ${args}. Time is ${dated}`)
    const weatherInfo = `${msg.author.tag} used the weather command to search for ${args}. Time is ${dated}`
    var oldWeatherLog = fs.readFileSync("./weatherLogs.txt", {"encoding": "utf-8"});
    fs.writeFileSync("weatherLogs.txt", oldWeatherLog.toString())
    fs.appendFileSync("weatherLogs.txt", `${msg.author.tag} used the weather command to search for ${args}. Time is ${dated}\n`)
    
    const id = msg.author.id
    console.log(id)
    const name = msg.member.user.tag;
    console.log(name)
    var information = [];
    information.push(name, id)
    var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
    var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
}
}
