const commando = require('discord.js-commando');
const prefix  = '?'

module.exports = class PasswordCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'password',
            group: 'misc',
            memberName: 'password',
            description: 'Need a quick password for a random account? Make a super secure password!',
        })
}

async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

    await msg.channel.send(`Worried about your privacy? Use command ?passwordprivacy to read how we protect your password.`)
    function GeneratePassword(length = 16){
          const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

          let password = '';

          for(let i =0; i< length; ++i){
              let at = Math.floor(Math.random() * (charset.length + 1));

              password += charset.charAt(at);
          }

          return msg.author.send(`Here is your password: ||${password}||`);
    }

    GeneratePassword();
    }
}