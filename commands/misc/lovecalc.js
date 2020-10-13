const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
const fs = require('fs')
const prefix = '?'
module.exports = class SimprateCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lovecalc',
            group: 'misc',
            memberName: 'lovecalc',
            description: 'Calculate the love between two people',
            args:[
                    { 
                        key:'text',
                        prompt: 'Please name two people!',
                        type: 'string',
                    }
                ]
        })
    }

    
    async run (msg, { text }) {

        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        const user = msg.author.toString();
        let simprate = Math.floor(Math.random() * 100)
        const ruser = msg.mentions.users.first() || msg.author;
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        //let args = msg.split(" ").slice(1) // gets rid of the command
        let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
        
        
        const newembed = new Discord.MessageEmbed()
            .setColor('#00FFCC')
            .setTitle('Cupid')
            .addField("Result:", `${text}` + ' you are ' + simprate + '% in love! 💔💔💔')
            .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
        //msg.channel.send(newembed)
        if(simprate >50) {
            //var simprater = '100%'

            const newerembed = new Discord.MessageEmbed()
                .setColor('#00FF2E')
                .setTitle('Simprating Machine')
                .setDescription(`${text}` + ' you are ' + simprate + ' % in love! 😍😍😍')
                .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
                
            //var Embedmsg = await msg.channel.send(newembed)
            //await new Promise(r => setTimeout(r, 1200));
                
        msg.channel.send(newerembed);
        }
        else {
            msg.channel.send(newembed)
        }

        var information = [];
        information.push(name, id)
        //let uniqueinformation = [...new Set(information)];
        
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