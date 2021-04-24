//~~broken, not high on priority~~
//fixed!
const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class EmojifyCommand extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'emojify',
        group: 'misc',
        memberName: 'emojify',
        description: 'Changes words into emojis',
        args:[
          { 
            key:'text',
            prompt: 'Name at least one person to simprate!',
            type: 'string',
        }
      ]
            
    }
  )
}
      

async run (msg, { text }) {
      var finalMessage = [];
      
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
        
      let numbers = ["1","2","3","4", "5", "6", "7", "8", "9","0"]

      if(text.length > 91) {
        msg.channel.send('Keep it under 91 characters!')
      } 
      else{

        msg.delete()
        for(var i = 0; i < text.length; i++)

      {
        let newText = text.toLowerCase()
        if (newText[i].indexOf(' ') != -1){
          
          finalMessage.push(' ')

        } else if (numbers.includes(newText[i])) {

          finalMessage.push(`${newText[i]}`)

        } else if (typeof newText[i] === 'string') {

        finalMessage.push(`:regional_indicator_${newText[i]}:`)

        }
      }
      await msg.channel.send(finalMessage.join(" "))
    }
  }
}