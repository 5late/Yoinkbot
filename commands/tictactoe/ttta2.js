const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const prefix = '?'
const embed = require('./tttstart.js')

module.exports = class TicTacToeA1Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'a2',
            group: 'tictactoe',
            memberName: 'a2',
            description: 'Required for a2',
        })
    }
    async run (msg) {
        let embedfile = require('./tttstart.js')
        
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let ruser = msg.author.username;
        let rMember = args.username
        let chance = Math.floor(Math.random()* 20)+1
        
       const embed = new Discord.MessageEmbed()
       .setTitle('Tic Tac Toe')
       .addFields({name:' ‏‏‎ ', value: "❌ ‏‏‎  ‏‏‎ \n ‏‏‎  ‏‏‎  ‏‏‎ \n ‏‏‎  ‏‏‎  ‏‏‎ ", inline: true})
        
       let a2 = await msg.channel.send({embed: embedfile})
       a2.edit(embed)
       //msg.channel.send(embed)


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
