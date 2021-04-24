const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class LoveCalcCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lovecalc',
            group: 'misc',
            memberName: 'lovecalc',
            description: 'Calculate the love between two people',
            args:[
                    { 
                        key:'text',
                        prompt: 'Please name two people!',
                        type: 'string',
                    }
                ]
        })
    }
    
async run (msg, { text }) {
    
    function CalculateColor(percent){
        let color = `#ddd`
        if(percent > 10 && percent < 20) {
            color = `#f54542`
        } 
        else if (percent > 20 && percent < 40) {
            color = `#f58742`
        }
        else if (percent > 40 && percent < 60) {
            color = `#f5cb42`
        }
        else if (percent > 60 && percent < 80) {
            color = `#b2f743`
        }
        else if (percent > 80 && percent < 100) {
            color = `#35fc3f`
        }
        return color
    }

    let lovecalc = Math.floor(Math.random() * 100)
        
    const newembed = new Discord.MessageEmbed()
        .setColor(CalculateColor(lovecalc))
        .setTitle('Cupid')
        .addField("Result:", `${text}` + ' you are ' + lovecalc + '% in love!')
        .setFooter("Yoinkbot", config.yoinkbotPFP)
    msg.channel.send(newembed)
}
}