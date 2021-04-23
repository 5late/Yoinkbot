const commando = require('discord.js-commando');
const fs = require('fs')
const client = new commando.CommandoClient;
const Discord = require('discord.js')
const prefix = '?'
const Canvas = require('canvas'),
Image = Canvas.Image
const { type } = require('os');
const request = require('request');
const { join } = require('path');


module.exports = class InfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'uinfo',
            group: 'dev_tools',
            memberName: 'uinfo',
            description: 'Gives info about a user.',
        })
    }
    async run (msg) {
            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            
            
            const name = msg.member.user.tag;
            let rMember = msg.guild.member(msg.mentions.users.first())// || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
            console.log(rMember.user)
            const joinDate = rMember.createdAt;
            let roled = rMember.roles.cache.size - 1
            let userid = rMember.id
            const member = msg.guild.member(rMember);
            const status = member.presence.status;
            const ruser = msg.guild.members.cache.get(args[0])
            
            let nickname = rMember.displayName
            console.log(`1`)
            let micon = rMember.user.displayAvatarURL({format: 'png'})

            const canvas = Canvas.createCanvas(700, 500);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage('./background.jpg')
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            console.log(`This works`)
            //ctx.strokeStyle('#74037b')
            //ctx.strokeRect(0, 0, canvas.width, canvas.height)

            ctx.font = '28px comic sans';
	        ctx.fillStyle = '#000000';
            ctx.fillText(``, canvas.width / 2.5, canvas.height / 2.5);
            
            const applyText = (canvas, text) => {
                const ctx = canvas.getContext('2d');
            
                // Declare a base size of the font
                let fontSize = 70;
            
                do {
                    // Assign the font to the context and decrement it so it can be measured again
                    ctx.font = `${fontSize -= 10}px comic sans`;
                    // Compare pixel width of the text to the canvas minus the approximate avatar size
                } while (ctx.measureText(text).width > canvas.width - 300);
            
                // Return the result to use in the actual canvas
                return ctx.font;
            };
            
            ctx.font = applyText(canvas, `${rMember.displayName}!`);
	        ctx.fillStyle = '#000000';
            ctx.fillText(`${rMember.displayName}!`, canvas.width / 2.5, canvas.height / 10);
            

            ctx.font = '50px px comic sans'
	        //ctx.fillStyle = '#000000';
            ctx.fillText(`Status: ${status}`, canvas.width / 2.5, canvas.height / 4);
            /*ctx.beginPath();
            ctx.arc(100, 75, 50, 0, Math.PI * 2, true);
	        ctx.closePath();
	        ctx.clip();
            console.log(`This works 2`)
          */
            const avatar = await Canvas.loadImage(micon)
            console.log(`This works 3`)
            const img = await new Image(); img.src = avatar;
            ctx.drawImage(avatar, 25, -10, 200, 200);
            console.log(`This works 4`)
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `info.png`)

            msg.channel.send(attachment)

}
}
