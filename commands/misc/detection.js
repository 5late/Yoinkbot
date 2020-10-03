const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
const fs = require('fs')
module.exports = class RetardCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'retard',
            group: 'misc',
            memberName: 'retard',
            description: 'Are you a retard? Returns answer Yes or No.',
        })
    }

    
    async run (msg) {

        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        const user = msg.author.toString();
        
        const retard = ['Yes', 'Yes', 'No']
        
        const retardcheck = retard[Math.floor(Math.random() * retard.length)];

        if(retardcheck === 'Yes') {
            const embeded = new Discord.MessageEmbed()
            .setColor('#00AE20')
            .setTitle('Retard check machine')
            .setDescription(user + ' the answer is ' + retardcheck)
            .setImage('https://i.kym-cdn.com/photos/images/original/001/717/932/551.png')
            .setFooter("Yoinkbot collects your username and tag to improve our services. To find out what's being collected, contact the bot owner with the command '?owner")
            msg.channel.send(embeded)
        }
        else{
            const newembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Retard Check machine')
            .setDescription(user + ' the answer is ' + retardcheck)
            .setImage('https://i.kym-cdn.com/photos/images/facebook/001/483/348/bdd.jpg')
            .setFooter("Yoinkbot collects your usernames and tag to improve our services. To find out what's being collected, contact the bot owner with the command '?owner")
            msg.channel.send(newembed)
        }
        
        
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