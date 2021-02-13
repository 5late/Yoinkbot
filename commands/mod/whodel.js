const commando = require('discord.js-commando');
const path = require('path');
const Discord = require('discord.js')
const client = new commando.CommandoClient();
const fs = require(`fs`)


module.exports = class Massdelete extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whodel',
            group: 'mod',
            memberName: 'whodel',
            description: 'Deletes up to the last 100 messages'
        })
    }
    async run(msg) {

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

