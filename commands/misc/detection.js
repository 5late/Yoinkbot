const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))

module.exports = class IdiotCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'idiot',
            group: 'misc',
            memberName: 'idiot',
            description: 'Are you a idiot? Returns answer Yes or No.',
        })
    }

    
    async run (msg) {
        const user = msg.author.toString();
        
        const idiot = ['Yes', 'Yes', 'No']
        
        const idiotcheck = idiot[Math.floor(Math.random() * idiot.length)];

        if(idiotcheck === 'Yes') {
            const embeded = new Discord.MessageEmbed()
            .setColor('#00AE20')
            .setTitle('Idiot check machine')
            .setDescription(user + ' the answer is ' + idiotcheck)
            .setImage('https://i.kym-cdn.com/photos/images/original/001/717/932/551.png')
            .setFooter(`Yoinkbot`, config.yoinkbotPFP)
            msg.channel.send(embeded)
        }
        else{
            const newembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Idiot Check machine')
            .setDescription(user + ' the answer is ' + idiotcheck)
            .setImage('https://i.kym-cdn.com/photos/images/facebook/001/483/348/bdd.jpg')
            .setFooter(`Yoinkbot`, config.yoinkbotPFP)
            msg.channel.send(newembed)
        }
    }
}