const commando = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js')
const client = new commando.CommandoClient();
//const args = message.content.split(' ').slice(1); 
//const amount = args.join(' ');
const fs = require('fs');
var deletedMessages = [];
var authored = [];

module.exports = class Massdelete extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'delete',
            group: 'mod',
            memberName: 'delete',
            description: 'Deletes up to the last 100 messages'
        })
    }
    async run(msg) {
        const args = msg.content.split(' ').slice(1); 
        const amount = args.join(' ');
        {
            if (!amount) return msg.reply('You have not given the amount of messages to delete. ```Error Code 1: No message amount given.```')
            if (isNaN(amount)) return msg.reply('Numbers need to be numbers. ```Error Code 2: Message amount is not a number.```'); 
            if (amount > 100) return msg.reply('Try not to kill this server? Maximum number of messages to delete is 100. ```Error Code 3: Message amount over 100.```'); 
            if (amount < 1) return msg.reply('Are you even trying to delete anything? ```Error code 4: Message amount under 1.```');
            await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
                msg.channel.bulkDelete(messages
            )});
}
deletedMessages.push(amount)
authored.push(msg.author.tag)

var Dated = new Date().toLocaleString();

const information = {
data:[{
    number: deletedMessages.slice(-2)[0],
    author: authored.slice(-2)[0],
    date:Dated
}]
}

information.data.push({
number: deletedMessages.slice(-1)[0],
author: authored.slice(-1)[0],
date:Dated
})
var newDMessages = JSON.stringify(information,null,5)
fs.writeFileSync(`./commands/mod/info.json`, newDMessages)

fs.readFile(`./commands/mod/info.json`,'utf-8', (err, jsonString) => {
    if (err){
        console.log(`File read failed: ${err}`)
        return
    }
    try {
        const customer = JSON.parse(jsonString)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Message Deletion Cache`)
        .addFields({name: `Date:`, value: customer.data[1].date})
        .addFields({name: `Messages Deleted:`, value: customer.data[1].number})
        .addFields({name: `Executor:`, value: customer.data[1].author})
    msg.channel.send(embed)
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})
}}