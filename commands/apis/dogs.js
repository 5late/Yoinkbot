const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const prefix = '?'

module.exports = class DogCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dogs',
            group: 'apis',
            memberName: 'dogs',
            description: 'Displays a dog pic',
        })
    }
    async run (msg) {
        
        //const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        //const command = args.shift().toLowerCase();
        //const igUsername = args[0].toLowerCase();
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
        const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());

     // msg.channel.send(file);
      
      const embed = new Discord.MessageEmbed()
      .setTitle('Random Dog Generator')
      .setImage(message)
      .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, use the command '?owner'")
      msg.channel.send(embed)
        /*const res = await fetch(url).then(resUrl => resUrl.json()).catch(err => {
           console.log(`An error occurred: ${err}`);
           return message.reply('Something went wrong!');
        });
        const embed = new Discord.MessageEmbed()
        .setTitle('Fetching...')
        .setURL(url)
        msg.channel.send(embed)*/


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