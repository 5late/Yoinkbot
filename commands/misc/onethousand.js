const commando = require('discord.js-commando');

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'onek',
            group: 'misc',
            memberName: 'onek',
            description: 'Adds one to a number then sends, until 1000',
            
        })
      }
    async run (msg) {
           
        var i;
        for (i = 0; i < 1001; i++) {
          await new Promise(r => setTimeout(r, 1300));
          console.log("The number is " + i)
          msg.channel.send(i)
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