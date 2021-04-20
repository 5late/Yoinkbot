const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
const TinyURL = require('tinyurl');

module.exports = class LinkShortenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shorten',
            group: 'misc',
            memberName: 'shorten',
            description: 'Shorten a link. Works like bit.ly',
        })
    }
async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    
      TinyURL.shorten(args.toString(), function(res, err) {
        if (err)
          console.log(err)
          console.log(res);
          msg.channel.send(res)
      });
    }
}