const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { finished } = require('stream');
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'doot',
            group: 'misc',
            memberName: 'doot',
            description: 'Doot a message',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like me to doot?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
let finalsend = []
if (args.length > 14){
    msg.channel.send('too long')
}else{
    var i;
    text.split(' ')
for (i = 0; i < args.length; i++) {
    finalsend.push(args[i])
    finalsend.push('🎺 💀')
}
console.log(finalsend)
msg.channel.send(finalsend)
}
      
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