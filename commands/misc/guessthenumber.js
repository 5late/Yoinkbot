const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'guess',
            group: 'misc',
            memberName: 'guess',
            description: 'Choose something random from given choices.',
            args:[
              { 
                  key:'text',
                  prompt: 'Who would you like to guess against?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]))
const randomNumber = Math.floor(Math.random() * 10)+1;
console.log(randomNumber)

msg.reply('Guess a number between 1 and 10.')
const filter = m => m.content.includes('discord')
const collector = msg.channel.createMessageCollector(filter, { time: 15000 });
 collector.on('collect', m => {
                const startguessnumber = m.content
                if (startguessnumber === randomNumber){
                    msg.channel.send('You guessed it first!')
                }
            })
collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);
});
msg.channel.send(rMember + ' Your turn to guess a number')
const filtern = m => m.author.id === rMember
msg.channel.awaitMessages(filtern, { max: 1, time: 60000, errors: ['time'] }) // 1 minute timer & max of 1 attempt at answering
          .then(collected => {
                secondNumber = collected
                if (secondNumber === randomNumber){
                    msg.channel.send('You guessed it first')
                }  
        })

        if(1){
            var counts = [4, 9, 15, 6, 2],
            goal = randomNumber;
        
            var closest = counts.reduce(function(prev, curr) {
                return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            });
            msg.channel.send('Neither of you got the number, but ')
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