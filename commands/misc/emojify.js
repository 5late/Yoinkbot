//broken, not high on priority

const commando = require('discord.js-commando');
const { Message } = require('discord.js');
const fs = require('fs')

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
            
        })
      }
      

    async run (msg, { text }) {
      var finalMessage = [];
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        console.log(args.length)
        console.log(text)
         

      if(text.length > 91) {
        msg.channel.send('Keep it under 91 characters!')
      } 
      else{
        msg.delete()
        for(var i = 0; i < text.length; i++)
      {
        if (text[i].indexOf(' ') != -1){
          
          finalMessage.push(' ')

        } else if (!Number.isNaN(text[i])) {

          finalMessage.push(`:${text[i]}:`)

        } else {

        finalMessage.push(`:regional_indicator_${text[i]}:`)
        
        }
      }
      await msg.channel.send(finalMessage.join(" "))
    }
    }
}