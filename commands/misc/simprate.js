const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
module.exports = class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'simprate',
            group: 'misc',
            memberName: 'simprate',
            description: 'Simp rate',
        })
    }

    
    async run (msg) {
        const oscarid = ['342874810868826112']
        const id = msg.author.id
        console.log(id)
        const user = msg.author.toString();
        let simprate = Math.floor(Math.random() * 100)
        
        
        
        const newembed = new Discord.MessageEmbed()
            .setColor('#00FFCC')
            .setTitle('Simprating machine')
            .setDescription(user + ' you are ' + simprate + '% simp')
        
        //msg.channel.send(newembed)
        if(id === '342874810868826112') {
            var simprater = '100%'

            const newerembed = new Discord.MessageEmbed()
                .setColor('#00FF2E')
                .setTitle('Simprating Machine')
                .setDescription(user + ' you are ' + simprater + ' simp')
                
            var Embedmsg = await msg.channel.send(newembed)
            //await new Promise(r => setTimeout(r, 1200));
                
        Embedmsg.edit(newerembed);
        }
        else {
            msg.channel.send(newembed)
        }
    }
}