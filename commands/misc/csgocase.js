const commando = require('discord.js-commando');

module.exports = class UnboxCSGOCase extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'unbox',
            group: 'misc',
            memberName: 'unbox',
            description: 'Unbox a Counter-Strike - Global Offensive Case.'
        })
    }
    async run(msg) {
        msg.channel.send("Welcome to the CSGO Case Simulator. To unbox a case, use the name of the case. The available cases are ```Fracture - ?fracture```")
        msg.channel.send("```Hydra - ?hydra```. Enjoy, and go broke!")
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