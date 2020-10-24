const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class AttackCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'attack',
            group: 'misc',
            memberName: 'attack',
            description: 'Attack the bot!',
        })
    }
    async run (msg) {
        const maxhealth = 100;
        const maxbothealth = 100;        
        const args = msg.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const choices = ['defend', 'attack']

        const defendNumber = Math.floor(Math.random() * 100)
        const attackNumber = Math.floor(Math.random() * 100)

        const choice = args[0];
        if (!choice) return msg.channel.send(`How to play: use ?attack then your choice!`);
        if (!choices.includes(choice)) return msg.channel.send(`Only these responses are accepted: \`${choices.join(', ')}\``);
        
        const random = Math.floor((Math.random() * choices.length));
        const botchoice = choices[random]
        
        switch(choice) {
            case 'defend': {
                if(maxhealth <100){
                msg.reply('You defended yourself! ' + defendNumber + ' was added to your health.')
                let newmaxhealth = maxhealth + defendNumber;
            break;
                }else{
                    msg.reply('You already have too much health!!')
                }
            }
            case 'attack': {
                msg.reply('You attacked me! I was hit for ' + attackNumber + ' damage!')
                let newbothealth = maxbothealth - attackNumber;
                if(newbothealth <= 0){
                    msg.reply('I am dead! You win!')
                }
            break;
            }
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