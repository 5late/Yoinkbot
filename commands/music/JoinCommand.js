const commando = require('discord.js-commando');

module.exports = class JoinVoiceChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins a voice channel.'
        })
    }
    
async run(msg) {
        let vc = msg.member.voice.channel;
        if(vc && !vc.connection) {
            await vc.join();
        }
    }
}