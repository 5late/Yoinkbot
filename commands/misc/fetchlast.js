const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix  = config.prefix

module.exports = class FetchLastCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fetchlast',
            group: 'misc',
            memberName: 'fetchlast',
            description: 'Fetch last message in a channel.',
        })
    }
async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      
      const messages = await msg.channel.messages.fetch({ limit: 2 });
      const lastMessage = messages.last();
      
      console.log(lastMessage.content);
}
}