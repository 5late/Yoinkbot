const commando = require('discord.js-commando');
const fs = require('fs')
const Discord = require('discord.js');
const search = require('youtube-search')
const path = require('path')
const config = require(path.join(__dirname,'..', '..', 'config', 'config.json'))
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};
module.exports = class SearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'search',
            group: 'misc',
            memberName: 'search',
            description: 'Attack the bot!',
        })
    }
    async run (msg) {

        let embed = new Discord.MessageEmbed()
            .setColor("#73ffdc")
            .setDescription("Please enter a search query. Remember to narrow down your search.")
            .setTitle("YouTube Search API");
        let embedMsg = await msg.channel.send(embed);
        let filter = m => m.author.id === msg.author.id;
        let query = await msg.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => console.log(err));
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            msg.channel.send({
                embed: {
                    title: 'Select which song you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));

            filter = m => (m.author.id === msg.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await msg.channel.createMessageCollector(filter, { maxMatches: 1 });
            collected.on('collect', m => {
                console.log(m.content)
            
            let selected = youtubeResults[m.content - 1];

            embed = new Discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);
				console.log(embed)
            msg.channel.send(embedMsg);
        })
        }
      
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