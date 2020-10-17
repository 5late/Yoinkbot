const commando = require('discord.js-commando');
const fetch = require('node-fetch')
const fs = require('fs')
const Discord = require('discord.js')
const talkedRecently = new Set();


module.exports = class Points extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'points',
            group: 'misc',
            memberName: 'points',
            description: 'Get your points/levels.',
        })
    }
    async run (msg) {
        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        var information = [];
        information.push(name, id)
        var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
      var newinfo = savedinfo;
    fs.writeFileSync("information.txt", JSON.stringify(newinfo))
    
    fs.appendFileSync("information.txt", JSON.stringify(information))

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
    }
}