const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
const Canvas = require('canvas');
const { createGzip } = require('zlib');

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dead',
            group: 'image_manipulation',
            memberName: 'dead',
            description: 'Dead-ify someone',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if(!args.length){
          msg.channel.send(`I need someone to dead-ify!`)
      }else{
      let rMember = msg.guild.member(msg.mentions.users.first())


        const canvas = Canvas.createCanvas(540,360)
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./imgs/grave.jpg')
        ctx.drawImage(background, 0,0, canvas.width, canvas.height)

        const avatar = await Canvas.loadImage(rMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 227, 85, 95, 150);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `grave.png`)
      
        msg.channel.send(attachment)
        
        
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
}