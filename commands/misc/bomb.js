const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class BombCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bomb',
            group: 'misc',
            memberName: 'bomb',
            description: 'A hydrogen bomb about to explode. Requested by Liam.',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
if(msg.member.hasPermission('ADMINISTRATOR')){
      await msg.channel.send(`The process of making a hydrogen bomb can be devastating and criminal. Unless you are a government agency, in which case its perfectly fine. Here's how its done.`)
      await new Promise(r => setTimeout(r, 1200));
      await msg.channel.send(`To make a hydrogen bomb, one would need uranium or plutonium as well as two other isotopes of hydrogen, called deuterium and tritium. The hydrogen bomb relies on the act of fusion. Fusion is where two separate atoms are put together in order to form a third atom.`)
      await new Promise(r => setTimeout(r, 9000));
      await msg.channel.send(`A bomb is going to explode.`)
      await new Promise(r => setTimeout(r, 2500));
      await msg.channel.bulkDelete(50)
      await msg.channel.send(`Bomb exploded.`)
      msg.author.send(`The effects of such a large blast can be fatal. Something else that can be fatal? Negative mental health. Are you doing ok? Here are some resources to reach out to in case you are feeling down.`)
      const embed = new Discord.MessageEmbed()
      .setTitle(`Stay Safe`)
      .addField(`National Suicide Hotline`, `800-273-8255`)
      .addField(`Website`,`https://www.crisisservicescanada.ca/en/`)
      .addField(`List of resources`, `http://www.suicide.org/hotlines/international/canada-suicide-hotlines.html`)
      .setFooter(`Yoinkbot, Xurxx#7879`)
      msg.author.send(embed)
}else{
    msg.channel.send('The power of the bomb is too strong.')
}
    }
}