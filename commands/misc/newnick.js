const commando = require('discord.js-commando');
const fs = require('fs')
const client = new commando.CommandoClient;
const Discord = require('discord.js')
const prefix = '?'

module.exports = class BotInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nick',
            group: 'misc',
            memberName: 'nick',
            description: 'Change your nickname',
        })
    }
    async run (msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const authorId = msg.author.id
        msg.guild.members.cache.get(authorId).setNickname(args.toString())

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
