const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
const TinyURL = require('tinyurl');

module.exports = class LinkShortenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shorten',
            group: 'misc',
            memberName: 'shorten',
            description: 'Shorten a link. Works like bit.ly',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      
      
      TinyURL.shorten(args.toString(), function(res, err) {
        if (err)
          console.log(err)
          console.log(res);
          msg.channel.send(res)
      });



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