const commando = require('discord.js-commando');

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
        const maxhealth = "100";
        const maxbothealth = "100";
        const nmaxhealth = parseInt(maxhealth)
        const nmaxbothealth = parseInt(maxbothealth)
        
        let health = '1'
        let bothealth = '1'

        function reset(){
            let health = nmaxhealth;
        }
        function botreset(){
            let bothealth = nmaxbothealth;
        }
                
        function AttackNumber(min, max){
        return Math.floor(min + Math.random()*(max + 1 - min))
        }
        const attackNumber = AttackNumber(40, 80);
        console.log(attackNumber)
        msg.channel.send(attackNumber)

        const args = msg.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const choices = ['defend', 'attack']
        
        const choice = args[0];
        if (!choice) return msg.channel.send(`How to play: use ?attack then your choice!`);
        if (!choices.includes(choice)) return msg.channel.send(`Only these responses are accepted: \`${choices.join(', ')}\``);
        
        const random = Math.floor((Math.random() * choices.length));
        const botchoice = choices[random]
        
        switch(choice) {
            case 'defend': {
                msg.reply('You defended yourself! ' + attackNumber + ' was added to your health.')
                //let health = '100';
                function reset(){
                    let health = nmaxhealth;
                const nhealth = parseInt(health)   
            let currenthealth = nhealth + attackNumber;
            const ncurrenthealth = parseInt(currenthealth)
            console.log(ncurrenthealth)
            }
            reset;
            break;
            }
            case 'attack': {
                msg.reply('You attacked me! I was hit for ' + attackNumber + ' damage!')
                let bothealth = '100';
                function botreset(){
                    let bothealth = nmaxbothealth;
                const nbothealth = parseInt(bothealth)
                }
                botreset;
            let currentbothealth = nbothealth - attackNumber;
            const ncurrentbothealth = parseInt(currentbothealth)
            console.log(ncurrentbothealth)
            break;
            }
        }
       if(bothealth = 0) {
           msg.reply('I am dead! You win!')
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