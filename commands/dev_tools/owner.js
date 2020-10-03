const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
module.exports = class OwnerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'owner',
            group: 'dev_tools',
            memberName: 'owner',
            description: 'Sends the owner of Yoinkbot.',
        })
    }
    async run (msg) {
           
        const owner = new Discord.MessageEmbed()
        .setTitle("The owner of this bot is Xurxx#7879")
        .setDescription("The github page for this bot is 'https://github.com/5late/Yoinkbot'.")
        .setFooter("Yoinkbot collects your username and tag to improve the bot. To find out whats being collected, contact the bot owner using the command '?owner'")

        msg.channel.send(owner)
  
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