const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class AttackCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'attack',
            group: 'misc',
            memberName: 'attack',
            description: 'Attack the bot!',
        })
    }
    async run (msg) {
        const maxhealth = 100;
        const maxbothealth = 100;        
        const args = msg.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const choices = ['defend', 'attack']

        var currenthealth = [];
        var botcurrenthealth = [];

        const defendNumber = Math.floor(Math.random() * 100)
        const attackNumber = Math.floor(Math.random() * 100)

        const choice = args[0];
        if (!choice) return msg.channel.send(`How to play: use ?attack then your choice!`);
        if (!choices.includes(choice)) return msg.channel.send(`Only these responses are accepted: \`${choices.join(', ')}\``);
        
        const random = Math.floor((Math.random() * choices.length));
        const botchoice = choices[random]
        
        switch(choice) {
            case 'defend': {
                if(currenthealth <100){
                currenthealth.push(25)
            break;
                }else{
                    msg.reply('You already have too much health!!')
                }
            }
            case 'attack': {
                msg.reply('You attacked me! I was hit for ' + attackNumber + ' damage!')
                let newbothealth = maxbothealth - attackNumber;
                if(newbothealth <= 0){
                    msg.reply('I am dead! You win!')
                }
            break;
            }
        }
    }

}