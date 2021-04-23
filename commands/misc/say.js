const commando = require('discord.js-commando');

module.exports = class SayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'misc',
            memberName: 'say',
            description: 'Repeats arguments.',
            args:[
                { 
                    key:'text',
                    prompt: 'What would you like to say?',
                    type: 'string',
                }
              ]
        })
    }
    async run (msg, { text }) {
           
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        msg.channel.send(text).then(msg.delete())
    }
}