const commando = require('discord.js-commando');

module.exports = class DCCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dc',
            group: 'music',
            memberName: 'dc',
            description: 'Leaves the voice channel.',
        })
    }

async run (msg) {
        const voiceChannel = msg.member.voice.channel;

        voiceChannel.leave()

        msg.channel.send('Disconnected.')
  }
}