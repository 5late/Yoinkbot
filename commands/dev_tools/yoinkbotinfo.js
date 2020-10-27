const commando = require('discord.js-commando');
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '?'
const moment = require("moment"); 
require("moment-duration-format");
const ms = require('ms')

module.exports = class BotInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ybstats',
            group: 'dev_tools',
            memberName: 'ybstats',
            description: 'Gives info about the bot.',
        })
    }
    async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
            
    
    const serversIn = 8
    const totalUsers = 134
    
    const serverIcon = 'https://cdn.discordapp.com/embed/avatars/1.png'
    
    let uptime = ms(this.client.uptime, { long: true });

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        //(datata.length / 30) - .7
        const timesUsed = ((datata.length/30)-.7) + 2500
    

    const embed = new Discord.MessageEmbed()
    .setTitle('Global Info for Yoinkbot#1691')
    .setColor('RANDOM')
    .setThumbnail(serverIcon)
    .addFields({name: 'Bot Owner: ', value: 'Xurxx#7879'})
    .addFields({name: "Server Count: ", value: serversIn, inline: true})
    .addFields({name: "# of Members", value: totalUsers, inline: true})
    .addFields({name: 'Command Count', value: timesUsed})
    .addFields({name: 'Uptime', value: uptime, inline: true})
    .addField('Did you know we have a beta bot?', 'It gets bleeding edge commands before Yoinkbot does! Use command ?invite to get the link!')
    .addField("Add Yoinkbot to your server!", "[Click here](https://discord.com/oauth2/authorize?client_id=724989158891847700&permissions=2147483639&scope=bot)")
    msg.channel.send(embed)
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
