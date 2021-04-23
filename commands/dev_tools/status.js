const commando = require('discord.js-commando');

module.exports = class OwnerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'status',
            group: 'dev_tools',
            memberName: 'status',
            description: 'BOT OWNER ONLY',
        })
    }
}