//broken, not high on priority

const commando = require('discord.js-commando');
const { Message } = require('discord.js');
const fs = require('fs')

module.exports = class EmojifyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'emojify',
            group: 'misc',
            memberName: 'emojify',
            description: 'Changes words into emojis',
            
        })
      }
    async run (msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        console.log(args.length)
        console.log(args)
          
        for (msg.content.includes('a') in msg){
            msg.channel.send('🇦')
        }

        if (msg.content.includes('b')){
            msg.channel.send('🇧')
        }

        if (msg.content.includes('c')){
            
        }

        if (msg.content.includes('d')){
            
        }

        if (msg.content.includes('e')){
            
        }

        if (msg.content.includes('f')){
            
        }

        if (msg.content.includes('g')){
            
        }

        if (msg.content.includes('h')){
            
        }

        if (msg.content.includes('i')){
            
        }

        if (msg.content.includes('j')){
            
        }

        if (msg.content.includes('k')){
            
        }
        if (msg.content.includes('l')){
            
        }
        if (msg.content.includes('m')){
            
        }

        if (msg.content.includes('n')){
            
        }

        if (msg.content.includes('o')){
            
        }

        if (msg.content.includes('p')){
            
        }
        if (msg.content.includes('q')){
            
        }
        if (msg.content.includes('r')){
            
        }
        if (msg.content.includes('s')){
            
        }
        if (msg.content.includes('t')){
            
        }
        if (msg.content.includes('u')){
            
        }
        if (msg.content.includes('v')){
            
        }
        if (msg.content.includes('w')){
            
        }
        if (msg.content.includes('x')){
            
        }
        if (msg.content.includes('y')){
            
        }
        if (msg.content.includes('z')){
            
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