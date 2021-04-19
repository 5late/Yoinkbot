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
          if(text[i].indexOf('a') != -1)
        {
          finalMessage.push('🇦')
        }

        if(text[i].indexOf('b') != -1){
           finalMessage.push('🇧')
        }

        if(text[i].indexOf('c') != -1){
            finalMessage.push('🇨')
        }

        if(text[i].indexOf('d') != -1){
          finalMessage.push('🇩')
        }

        if(text[i].indexOf('e') != -1){
          finalMessage.push('🇪')
        }

        if(text[i].indexOf('f') != -1){
          finalMessage.push('🇫')
        }

        if(text[i].indexOf('g') != -1){
          finalMessage.push('🇬')
        }

        if(text[i].indexOf('h') != -1){
          finalMessage.push('🇭') 
        }

        if(text[i].indexOf('i') != -1){
          finalMessage.push('🇮')
        }

        if(text[i].indexOf('j') != -1){
          finalMessage.push('🇯')
        }

        if(text[i].indexOf('k') != -1){
          finalMessage.push('🇰')
        }
        if(text[i].indexOf('l') != -1){
          finalMessage.push('🇱')
        }
        if(text[i].indexOf('m') != -1){
          finalMessage.push('🇲')
        }

        if(text[i].indexOf('n') != -1){
          finalMessage.push('🇳')
        }

        if(text[i].indexOf('o') != -1){
          finalMessage.push('🇴')
        }

        if(text[i].indexOf('p') != -1){
          finalMessage.push('🇵')
        }
        if(text[i].indexOf('q') != -1){
          finalMessage.push('🇶')
        }
        if(text[i].indexOf('r') != -1){
          finalMessage.push('🇷')
        }
        if(text[i].indexOf('s') != -1){
          finalMessage.push('🇸')
        }
        if(text[i].indexOf('t') != -1){
          finalMessage.push('🇹')
        }
        if(text[i].indexOf('u') != -1){
          finalMessage.push('🇺')
        }
        if(text[i].indexOf('v') != -1){
          finalMessage.push('🇻')
        }
        if(text[i].indexOf('w') != -1){
          finalMessage.push('🇼')
        }
        if(text[i].indexOf('x') != -1){
          finalMessage.push('🇽')
        }
        if(text[i].indexOf('y') != -1){
          finalMessage.push('🇾')
        }
        if(text[i].indexOf('z') != -1){
          finalMessage.push('🇿')
        }
        if(text[i].indexOf(' ') != -1){
          finalMessage.push('  ')
        }
        if(text[i].indexOf('1') != -1){
          finalMessage.push(':one:')
        }
        if(text[i].indexOf('2') != -1){
          finalMessage.push(':two:')
        }
        if(text[i].indexOf('3') != -1){
          finalMessage.push(':three:')
        }
        if(text[i].indexOf('4') != -1){
          finalMessage.push(':four:')
        }
        if(text[i].indexOf('5') != -1){
          finalMessage.push(':five:')
        }
        if(text[i].indexOf('6') != -1){
          finalMessage.push(':six:')
        }
        if(text[i].indexOf('7') != -1){
          finalMessage.push(':seven:')
        }
        if(text[i].indexOf('8') != -1){
          finalMessage.push(':eight:')
        }
        if(text[i].indexOf('9') != -1){
          finalMessage.push(':nine:')
        }
      }
      await msg.channel.send(finalMessage.join(" "))
    }
    }
}