const commando = require('discord.js-commando');

module.exports = class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pong',
            group: 'misc',
            memberName: 'pong',
            description: 'Pongs!',
        })
    }
    async run (msg) {
        var pongg;
        for (var i; i<100; i++){
            if(i % 2) {
                var pongg = 'pong!'
            }
            else {
                var pongg = 'pongy!'
            }
        }
        msg.reply(pongg)
    }
}