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
            name: 'google',
            group: 'misc',
            memberName: 'google',
            description: 'Search Google! Returns link.',
        })
    }
    async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const dated = new Date().toLocaleString();


    msg.reply(`https://www.google.com/search?q=${args}`)


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
