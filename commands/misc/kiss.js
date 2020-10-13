const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            group: 'misc',
            memberName: 'kiss',
            description: 'Kisses the mentioned user.',
            args:[
                { 
                    key:'text',
                    prompt: 'Who would you like to hug?',
                    type: 'string',
                }
              ],
            
        })
      }
    async run (msg, { text }) {
           
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const rMember = msg.mentions.users.first();

       msg.channel.send(msg.author.username + ' gave ' + text + ' a big smooch on the cheek 😗😗😘😘')

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