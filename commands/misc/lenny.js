const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lenny',
            group: 'misc',
            memberName: 'lenny',
            description: 'Lenny',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
const lenny =['( ͡° ͜ʖ ͡°)', '( ͠° ͟ʖ ͡°)', '( ͡~ ͜ʖ ͡°)', '( ͡ʘ ͜ʖ ͡ʘ)', '( ͡o ͜ʖ ͡o)', '(° ͜ʖ °)', '( ‾ʖ̫‾)', '( ಠ ͜ʖಠ)', '( ͡° ʖ̯ ͡°)', '( ͡ಥ ͜ʖ ͡ಥ)', '༼  ͡° ͜ʖ ͡° ༽', '(▀̿Ĺ̯▀̿ ̿)', '( ✧≖ ͜ʖ≖)', '(ง ͠° ͟ل͜ ͡°)ง', '(͡ ͡° ͜ つ ͡͡°)' , '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]', '(✿❦ ͜ʖ ❦)', 'ᕦ( ͡° ͜ʖ ͡°)ᕤ', '( ͡° ͜ʖ ͡°)╭∩╮', '¯\_( ͡° ͜ʖ ͡°)_/¯', '(╯ ͠° ͟ʖ ͡°)╯┻━┻', '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)', '¯\_(ツ)_/¯', 'ಠ_ಠ', '(个_个)']
const lennyimage = lenny[Math.floor(Math.random() * lenny.length)];

      msg.delete()
      msg.channel.send(lennyimage)
        
        
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