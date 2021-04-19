const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix = '?'
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const client = new Discord.Client();
client.token = config.token;

module.exports = class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['pfp', 'av', 'profilepicture'],
            group: 'misc',
            memberName: 'avatar',
            description: 'Displays your avatar',
        })
    }
    async run (msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        function getIdFromMention(mention) {
            if (!mention) return;
    
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
            }
            mention = client.users.fetch(mention)
            return mention;
        }

        if(!args.length){
        
        let ruser = msg.author;
        var avatar = ruser.displayAvatarURL({dynamic: true})
        let embed = new Discord.MessageEmbed()
        .setTitle('Avatar URL')
        .setImage(msg.author.displayAvatarURL({dynamic: true}))
        .setURL(avatar)
        .setColor('#275BF0')
        msg.channel.send(embed)

        }else{

            let thanos = getIdFromMention(args[0])

            thanos.then(function(result1) {
        
            let embed = new Discord.MessageEmbed()
            .setTitle('Avatar URL')
            .setImage(result1.displayAvatarURL({dynamic: true}))
            .setURL(result1.avatarURL())
            .setColor('#275BF0')
        
            msg.channel.send(embed)
                    
            });
                    

        }
    }
}
