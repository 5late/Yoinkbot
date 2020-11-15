const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class EightBallCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'misc',
            memberName: '8ball',
            description: 'Answer Yes/No questions',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like to ask Yoinkbot?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
const eightball =['Yes', 'No', 'Ask again', 'Never', 'For sure', 'Without a doubt', 'No possibility', 'Absolutely not', 'My magic tells me yes']
const answer = eightball[Math.floor(Math.random() * eightball.length)];


console.log(args)
      const embed = new Discord.MessageEmbed()
      .setTitle(`${text}:`)
      .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setDescription(answer)
      .setFooter(`Yoinkbot`, `https://cdn.discordapp.com/embed/avatars/1.png`)

      msg.channel.send(embed)
        
        
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