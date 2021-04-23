const commando = require('discord.js-commando');
const prefix  = '?'

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'uwu',
            group: 'misc',
            memberName: 'uwu',
            description: 'uwu',
            args:[
              { 
                  key:'text',
                  prompt: 'Who would you like to be the main character in this story?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      var finalMessage = [];
      
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
        
      let uwuaters = ["h", "r"]

      if(text.length > 91) {
        msg.channel.send('Keep it under 91 characters!')
      } 
      else{

        msg.delete()
        finalMessage.push('uwu ')
        for(var i = 0; i < text.length; i++)

      {
        let newText = text.toLowerCase()
        if (newText[i].indexOf(' ') != -1){
          
          finalMessage.push(' ')

        } else if (uwuaters.includes(newText[i])) {

          finalMessage.push(`w`)

        } else{

        finalMessage.push(`${newText[i]}`)

        }

      }
      await finalMessage.push(` uwu`)
      await msg.channel.send(finalMessage.join(""))
    }
  }
}