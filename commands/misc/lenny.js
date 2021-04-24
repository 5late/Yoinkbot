const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lenny',
            group: 'misc',
            memberName: 'lenny',
            description: 'Lenny',
            aliases: [
              'smiley'
            ]
    }
  )
}
    
async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    
    const lenny =['( ͡° ͜ʖ ͡°)', '( ͠° ͟ʖ ͡°)', '( ͡~ ͜ʖ ͡°)', '( ͡ʘ ͜ʖ ͡ʘ)', '( ͡o ͜ʖ ͡o)', '(° ͜ʖ °)', '( ‾ʖ̫‾)', '( ಠ ͜ʖಠ)', '( ͡° ʖ̯ ͡°)', '( ͡ಥ ͜ʖ ͡ಥ)', '༼  ͡° ͜ʖ ͡° ༽', '(▀̿Ĺ̯▀̿ ̿)', '( ✧≖ ͜ʖ≖)', '(ง ͠° ͟ل͜ ͡°)ง', '(͡ ͡° ͜ つ ͡͡°)' , '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]', '(✿❦ ͜ʖ ❦)', 'ᕦ( ͡° ͜ʖ ͡°)ᕤ', '( ͡° ͜ʖ ͡°)╭∩╮', '¯\_( ͡° ͜ʖ ͡°)_/¯', '(╯ ͠° ͟ʖ ͡°)╯┻━┻', '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)', '¯\_(ツ)_/¯', 'ಠ_ಠ', '(个_个)']
    const lennyimage = lenny[Math.floor(Math.random() * lenny.length)];

      msg.delete()
      msg.channel.send(lennyimage)
  }
}