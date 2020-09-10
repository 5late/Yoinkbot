const commando = require('discord.js-commando');

const Discord = require('discord.js')
    

module.exports = class UnboxHydraCase extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hydra',
            group: 'misc',
            memberName: 'hydra',
            description: 'Unbox the Hydra case.'
        })
    }
    async run(msg) {
    const images = [
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//coverts
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/02.png',
'https://vignette.wikia.nocookie.net/cswikia/images/1/15/Csgo-awp-oni-taiji-announce.png/revision/latest/top-crop/width/300/height/300?cb=20170922120819',
//GLOVES
'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_emerald_web_light_large.0ac5fb6e5faf01860ba42d0c3378369d206d6d06.png']
    const image = images[Math.floor(Math.random() * images.length)];
    
    {
      
            const random = new Discord.MessageEmbed()
              .setTitle('Here are your winnings')
              .setAuthor('Xurxx#7879')
              .setImage(image)
        
            msg.channel.send(random);

            {
                if (image === 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_emerald_web_light_large.0ac5fb6e5faf01860ba42d0c3378369d206d6d06.png'){
                return msg.reply('Congrats! You got gloves!!!')
            }
            }
        }
    }
}
