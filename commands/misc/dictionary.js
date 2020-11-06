const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const prefix = '?'
const querystring = require('querystring');
const axios = require('axios')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dict',
            group: 'misc',
            memberName: 'dict',
            description: 'Search the dictionary for a word.',
        })
    }
    async run (msg) {
        
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        //const igUsername = args[0].toLowerCase();
       
        const query = querystring.stringify({ term: args.join(' ') });

   axios 
   .get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/hello`   
    )
   .then(response => {
       let apiData = response;
       let definition = apiData.definition;

       msg.reply(definition)
   }
   )

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