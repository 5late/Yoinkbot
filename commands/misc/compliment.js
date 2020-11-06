const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'compliment',
            group: 'misc',
            memberName: 'compliment',
            description: 'Compliment someone! Defaults to self.',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
const trumpImage =['You are a gift to others', 'I appreciate you', 'You deserve a hug right now.','You light up the room', 'You light up a room', 'You are an awesome friend', 'You bring out the best in people', 'You are making difference.', 'I may be a bot, but I am inspired by you.','On a scale from one to ten, you are an eleven.', 'You are more helpful than you realize.']
const image = trumpImage[Math.floor(Math.random() * trumpImage.length)];

//const responses = ['Drink Bleach!', 'Fake NEWS!', 'VOTE!!!!!', 'CHINA!', 'CORRUPT!!!!!', 'MAKE AMERICA GREAT AGAIN!!!', 'OBAMAGATE!!!!', 'You are the enemy of the people.', 'LAW AND ORDER!!!!', 'RIGGED ELECTION!!!', 'CROOKED HILLARY!!', 'SLEEPY JOE!!']
//const response = responses[Math.floor(Math.random()* responses.length)];
console.log(args)
if(!args.length){
    const person = msg.author.username;
    function getUserFromMention(mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return client.users.cache.get(mention);
        }
    }
    const embed = new Discord.MessageEmbed()
      .setTitle('Compliment machine.')
      //.setImage(image)
      .setDescription('<@'+msg.author.id +'>' +' ' + image)
      //.setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

      msg.channel.send(embed)
}
else{
    const person = args;
    const embed = new Discord.MessageEmbed()
      .setTitle('Compliment machine.')
      //.setImage(image)
      .setDescription(person + ' ' + image)
      //.setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

      msg.channel.send(embed)
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