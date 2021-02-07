const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')
const prefix = '?'

module.exports = class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'catfact',
            group: 'misc',
            memberName: 'catfact',
            description: 'Sends a dad joke',
        })
    }
    async run (msg) {
        
        //const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        //const command = args.shift().toLowerCase();
        //const igUsername = args[0].toLowerCase();
        
        let getJoke = async () => {
            let response = await axios.get(
                "https://cat-fact.herokuapp.com/facts"
            );
            GET `/facts/random?animal_type=cat&amount=2`
            let joke = response.Fact;
            return joke;
        };
        let jokeValue = await getJoke();
        await msg.channel.send(jokeValue + ' | React with ▶️ to send punchline!')

        
       


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