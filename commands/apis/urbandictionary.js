const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const querystring = require('querystring')
const prefix = '?'

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'urban',
            group: 'apis',
            memberName: 'urban',
            description: 'Searches for a definition on Urban Dictionary',
        })
    }
    async run (msg) {
        
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if (!args.length) {
            return msg.channel.send('You need to supply a search term!');
          }
        const query = querystring.stringify({ term: args.join(' ') });
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        if (!list.length) {
            return msg.channel.send(`No results found for **${args.join(' ')}**.`);
        }
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
        const [answer] = list;

    const embed = new Discord.MessageEmbed()
	    .setColor('#EFFF00')
	    .setTitle(answer.word + ' Definition on Urban Dictionary')
	    .setURL(answer.permalink)
	    .addFields(
    		{ name: 'Definition', value: trim(answer.definition, 1024) },
	    	{ name: 'Example', value: trim(answer.example, 1024) },
		    { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
        )
        .setFooter("Yoinkbot collects your username and tag to improve our services. To fnd out whats being collected, use the command '?owner'");

    msg.channel.send(embed);
        


    const id = msg.author.id
    console.log(id)
    const name = msg.member.user.tag;
    console.log(name)
    var information = [];
    information.push(name, id)
    var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
      var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
    }
}