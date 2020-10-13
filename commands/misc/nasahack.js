const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hacknasa',
            group: 'misc',
            memberName: 'hacknasa',
            description: 'Hacks Nasa.',
        })
    }
    async run (msg) {
           
       
        msg.reply('Entering the system...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Hacking backend security...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Hacking all NASA computers...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Entering mainframe...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Access granted. Congratulations.')
        await new Promise(r => setTimeout(r, 1500));






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