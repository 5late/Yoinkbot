const commando = require('discord.js-commando');
const fetch = require('node-fetch')
const fs = require('fs')
const Discord = require('discord.js')

module.exports = class CopyPastaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'copypasta',
            group: 'misc',
            memberName: 'copypasta',
            description: 'Sends a copy pasta from r/copypasta',
        })
    }
    async run (msg) {
           
        function loadMemes() {
            // Fetch JSON
            return (
             fetch('https://www.reddit.com/r/copypasta/hot/.json')
              .then((res) => res.json())
              // Return the actual posts
              .then((json) => json.data.children)
            );
           }
          
           function postRandomMeme(msg) {
            return loadMemes().then((posts) => {
             // Get a random post's title and URL
             const { title, selftext } = posts[Math.floor(Math.random() * posts.length)].data;
             // Create the embed
             const embed = new Discord.MessageEmbed({
              title,
              description: selftext, //{ description },
              //description: { url },
              footer: { text: 'Subreddit : r/copypasta,' + " Yoinkbot collects your usernames and tag to improve our services, to find out whats being collected contact the bot owner with the command '?owner'" },
             });
             //console.log(selftext)
             // Send the embed
             return msg.channel.send(embed);
            });
           }
          
           postRandomMeme(msg);










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