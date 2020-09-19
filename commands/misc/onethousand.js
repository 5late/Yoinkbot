const commando = require('discord.js-commando');

module.exports = class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'onek',
            group: 'misc',
            memberName: 'onek',
            description: 'Adds one to a number then sends',
        })
    }
    async run (msg) {
           
        var i;
        for (i = 0; i < 1001; i++) {
          await new Promise(r => setTimeout(r, 1300));
          console.log("The number is " + i)
          msg.channel.send(i)
        }
    }
}