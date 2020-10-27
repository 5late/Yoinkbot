const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class QuoteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'misc',
            memberName: 'quote',
            description: 'Quote something, by someone.',
            args:[
                { 
                    key:'text',
                    prompt: 'What would you like to say?',
                    type: 'string',
                }
              ]
            
        })
      }
    async run (msg, { text }) {   
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let rMember = msg.guild.member(msg.mentions.users.first())// || msg.guild.members.cache.get(args[0]))



        
        //let finalMessage = text - args[0]
        let finalMessages = await text.replace(args[0], '')
        //msg.channel.send(finalMessage)
        await msg.channel.send(finalMessages + `\n-${rMember}`)


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