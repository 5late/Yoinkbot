const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = require('discord.js')
const talkedRecently = new Set();

module.exports = class OwnerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dmowner',
            group: 'dev_tools',
            memberName: 'dmowner',
            description: 'Sends the owner of Yoinkbot a dm with information.',
        })
    }
    async run (msg) {
        await new Promise(r => setTimeout(r, 3000));
        const user = msg.member.user.tag
        if (talkedRecently.has(msg.author.id)) {
          return msg.channel.send("Cooldown! Wait 45 seconds before this command again. - " + user);
          
          
  } else {
        if(msg.author.id === '342874810868826112') return //msg.channel.send('HA! You are blocked from this command.!');
        if(msg.author.id === '349605838677082123') return msg.channel.send('HA! You are blocked from this command.!');
        const args = msg.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const guiild = msg.guild;
        const person = msg.author.tag
        const dated = new Date().toLocaleString();
        const ownerID = '564466359107321856'
        const moreInfo = args
        const finalMessage = `As of ${dated}, ${person} in server ${guiild} wants to know more information about Yoinkbot.`
        const finalMessage2 = 'They also included this info: ```' + moreInfo + '```'
        msg.client.users.fetch('564466359107321856').then((user) => {
            user.send(finalMessage);
            user.send(finalMessage2);
        });
  
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
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 10000);
}
}
