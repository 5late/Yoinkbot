//TIFU currently does not work with posts over 2048 characters in length. High on priority list. Check back soon.

const commando = require('discord.js-commando');
const fetch = require('node-fetch')
const fs = require('fs')
const Discord = require('discord.js')

module.exports = class CopyPastaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tifu',
            group: 'reddit',
            memberName: 'tifu',
            description: 'Sends a TIFU post from from r/tifu',
        })
    }
    async run (msg) {
           
        function loadMemes() {
            // Fetch JSON
            return (
             fetch('https://www.reddit.com/r/tifu/hot/.json')
              .then((res) => res.json())
              // Return the actual posts
              .then((json) => json.data.children)
            );
           }
           
           function postRandomMeme(msg) {
            return loadMemes().then((posts) => {
             // Get a random post's title and URL
             const { title, selftext, url, } = posts[Math.floor(Math.random() * posts.length)].data
              //.filter(post => !post.data.selftext.length > 1024);
             /*const postlength = posts.data.children.filter(post => 
              !post.data.selftext.length > 1024);*/
                 //if (!postlength) 
                 //return msg.channel.send('This TIFU post is too large to fit here on Discord. Take the link instead');
                        //msg.channel.send(url)
             // Create the embed
             const embed = new Discord.MessageEmbed({
              title,
              description: selftext, //{ description },
              url,
              //description: { url },
              footer: { text: 'Subreddit : r/tifu,' + " Yoinkbot collects your usernames and tag to improve our services, to find out whats being collected contact the bot owner with the command '?owner'" },
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