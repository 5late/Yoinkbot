const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'vinvite',
            group: 'misc',
            memberName: 'vinvite',
            description: 'Invite someone to a call!',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      
      let voiceChannel = msg.member.voice.channel;

        let invite = await msg.voiceChannel.createInvite()

        msg.channel.send(invite)
    }
}