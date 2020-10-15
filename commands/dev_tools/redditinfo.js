const commando = require('discord.js-commando');
const fs = require('fs')
const Discord = require('discord.js')
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd-redditinfo',
            group: 'dev_tools',
            memberName: 'd-redditinfo',
            description: 'Provides information about the Reddit post services.',
        })
    }
    async run (msg) {
           
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Reddit Info')
        .setDescription('Below find a list of the subreddit officially supported by Yoinkbot.')
        .addFields({name:'r/dankmemes', value: 'Use command ?meme'})
        .addFields({name:'r/programminghumour',value: 'Use command ?phumour'})
        .addFields({name:'r/copypasta', value: 'Use command ?copypasta'})
        .addFields({name:'r/food', value: 'Use command ?food'})
        .addFields({name:'r/tifu', value: 'Use command ?tifu'})
        .addFields({name:'r/PCM', value: 'Use command ?pcm'})
        .addFields({name:'r/holup', value: 'Use command ?holup'})
        .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

        msg.channel.send(embed)



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