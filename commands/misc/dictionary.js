const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const prefix = '?'
const querystring = require('querystring');

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
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
          }
        const query = querystring.stringify({ term: args.join(' ') });

    const { definition } = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`).then(response => response.json());

console.log(definition)
     // msg.channel.send(file);
     const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
     const [answer] = definition;

 const embed = new Discord.MessageEmbed()
     .setColor('#EFFF00')
     .setTitle(answer.word + ' Definition on the Dictionary')
     .setURL(answer.permalink)
     .addFields(
         { name: 'Definition', value: answer},
         //{ name: 'Example', value:  },
         )
     .setFooter("Yoinkbot collects your username and tag to improve our services. To fnd out whats being collected, use the command '?owner'");

 msg.channel.send(embed);
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