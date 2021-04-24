const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix
const TinyURL = require('tinyurl');

module.exports = class LinkShortenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shorten',
            group: 'misc',
            memberName: 'shorten',
            description: 'Shorten a link. Works like bit.ly',
            aliases: [
              'linkshorten', 'ls'
            ]
        })
    }

async run (msg) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    
      TinyURL.shorten(args.toString(), function(res, err) {
        if (err)
          console.log(err);
          msg.channel.send(res)
      });
    }
}