const commando = require('discord.js-commando');
const prefix  = '?'

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'react',
            group: 'misc',
            memberName: 'react',
            description: 'React to the previous message.',
            args:[
              { 
                  key:'text',
                  prompt: 'What emoji do you want me to react with?',
                  type: 'string',
              }
          ]
        })
    }
async run (msg, { text }) {
        const society = '769377185734590494'
    
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
     
      msg.delete()

     const amount = (parseInt(0)) + 1;

     if (args[0] === 'society'){
        args[0] = society
    }

     msg.channel.messages.fetch({
         limit: amount,
     }).then((messages) => {
         var i = 0;
         messages.forEach(function(message) {
             i++;
             if (i === amount) {
                 message.react(args[0]).catch(console.error);
             }
         })
     });
    }
}