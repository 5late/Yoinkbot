const commando = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path');
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))
//const config = require('./config.json');
const search = require('youtube-search');
const { time } = require('console');
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};

module.exports = class SearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'search',
            group: 'music',
            memberName: 'search',
            description: 'Search.',
        })
    }
    async run (msg) {
        
            let embed = new Discord.MessageEmbed()
                .setColor("#73ffdc")
                .setDescription("Please enter a search query. Remember to narrow down your search.")
                .setTitle("YouTube Search API");
            let embedMsg = await msg.channel.send(embed);
            msg.channel.send(embedMsg)
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
                //console.log(titles);
                msg.channel.send({
                    embed: {
                        title: 'Select which song you want by typing the number',
                        description: titles.join("\n")
                    }
                }).catch(err => console.log(err));
                
                let filter = m => (m.author.id === msg.author.id)// && m.content >= 1 && m.content <= youtubeResults.length;
                let collected = await msg.channel.createMessageCollector(filter, {time: 15000});
                
                collected.on('collect', m => {
                    let selected = youtubeResults[m.content -1];
    
                    const nembed = new Discord.MessageEmbed()
                        .setTitle(`${selected.title}`)
                        .setURL(`${selected.link}`)
                        .setDescription(`${selected.description}`)
                        .setThumbnail(`${selected.thumbnails.default.url}`)
                    msg.channel.send(nembed)
                })
                
                //console.log(nembed)
            }
    }
}