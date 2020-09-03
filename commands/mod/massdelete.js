const commando = require('discord.js-commando');
const path = require('path');
const discord = require('discord.js')
const client = new commando.CommandoClient();
//const args = message.content.split(' ').slice(1); 
//const amount = args.join(' ');


module.exports = class Massdelete extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'delete',
            group: 'mod',
            memberName: 'delete',
            description: 'Deletes the last 100 messages'
        })
    }
    async run(msg) {
        const args = msg.content.split(' ').slice(1); 
        const amount = args.join(' ');
        {
            if (!amount) return msg.reply('You have not given the amount of messages to delete you idiot. ```Error Code 1: No message amount given.```')
            if (isNaN(amount)) return msg.reply('You absolute idiot numbers need to be numbers. ```Error Code 2: Message amount is not a number.```'); 
            if (amount > 100) return msg.reply('Try not to kill this server, eh? Maximum number of messages to delete is 100. ```Error Code 3: Message amount over 100.```'); 
            if (amount < 1) return msg.reply('Are you even trying to delete anything? ```Error code 4: Message amount under 1.```');
            await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
                msg.channel.bulkDelete(messages
            )});
}}}
