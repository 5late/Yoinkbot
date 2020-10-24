const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
const fs = require('fs')
const prefix = '?'
module.exports = class FightCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fight',
            group: 'misc',
            memberName: 'fight',
            description: 'Simp rate',
            args:[
                    { 
                        key:'text',
                        prompt: 'Name at least one person to simprate!',
                        type: 'string',
                    }
                ]
        })
    }

    
    async run (msg, { text }) {

        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        const user = msg.author.toString();
        let damage = Math.floor(Math.random() * 70)
        let newdamage = Math.floor(Math.random() * 70)
        let newerdamage = Math.floor(Math.random() * 70)
        const ruser = msg.author;
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        //let args = msg.split(" ").slice(1) // gets rid of the command
        let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
        let Dhealth = 100;
        //let newDhealth = []
        let Ahealth = 100;
while(Ahealth>0 && Dhealth>0){
    while (Dhealth >0){
        msg.reply(`You did ${damage} to ${rMember}`)
        msg.channel.send(`${rMember} it is your turn to attack!`)
        let newDhealth = Dhealth - damage;
        msg.channel.send(`${rMember} you are left with ${newDhealth}`)
        break
        } 
    while (Ahealth >0){
    const filter = m => m.author.id === rMember.id;
    //const filter = m => m.content.includes('discord');
    const collector = msg.channel.createMessageCollector(filter, { time: 7000 });

    collector.on('collect', m => {
        console.log(`Collected ${m.content}`)
        if(m.content === 'fight'){
            msg.reply(`You fought against ${ruser} and did ${newdamage} damage.`)
            let newAhealth = Ahealth - newdamage;
            msg.channel.send(`${ruser} you are left with ${newAhealth}`)
        }
    })
    break
}
const filter = m => m.author.id === ruser.id;
//const filter = m => m.content.includes('discord');
const collector = msg.channel.createMessageCollector(filter, { time: 7000 });

collector.on('collect', m => {
    console.log(`Collected ${m.content}`)
    if(m.content === 'fight'){
        msg.reply(`You fought against ${rMember} and did ${newerdamage} damage.`)
        let newDhealth = Dhealth - damage;
        let newerDhealth = newDhealth - newerdamage;
        msg.channel.send(`${rMember} you are left with ${newerDhealth}`)
    }
})
    
    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`)
    })
    break
}

        var information = [];
        information.push(name, id)
        //let uniqueinformation = [...new Set(information)];
        
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