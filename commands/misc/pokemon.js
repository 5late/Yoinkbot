const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const fetch = require('node-fetch');
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

module.exports = class RouletteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pokemon',
            group: 'misc',
            memberName: 'pokemon',
            description: 'Get a pokemon',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like to ask?',
                  type: 'string',
              }
            ]
            
        })
      }
    async run (msg, { text }) {
            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const pokemon = msg.content.toLowerCase().split(" ")[1];
            try {
                const pokeData = await getPokemon(pokemon);
                const {
                    abilities,
                    sprites,
                    stats,
                    weight,
                    name,
                    id,
                    base_experience,
                    types
                } = pokeData;
                const embed = new Discord.MessageEmbed();
                console.log('this works')
                embed.setTitle(`${name} #${id}`);
                if (sprites.front_default) {
                    embed.setThumbnail(`${sprites.front_default}`);
                }
                stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat, true));
                abilities.forEach(ability => embed.addField("Abilities",ability.ability.name, true));
                types.forEach(type => embed.addField('Type', type.type.name, true));
                embed.addField('Weight', weight);
                embed.addField('Base Experience', base_experience);
                if (sprites.other['official-artwork'].front_default) {
                    embed.setImage(`${sprites.other['official-artwork'].front_default}`);
                }
                await msg.channel.send(embed);
                let guildID = msg.guild.id;
                /*const conf = await config.findOne({
                    where: {
                        guildId: guildID
                    }
                });*/
                let dato = new Date();
                dato.setHours(dato.getHours() + 2);
                /*if (conf) {
                    logchannel = conf.logchannel;
                    msg.client.channels.cache.get(logchannel).send(`${msg.author} asked for info on Pokèmon: ${name} #${id}! ` + dato.toLocaleTimeString() + dato.toLocaleDateString());
                }*/
            

            const chosenPokemon = pokeData.name
            const newembed = new Discord.MessageEmbed()
            .setTitle(`You've chosen ${chosenPokemon}!`)
            abilities.forEach(ability => newembed.addField("Ability",ability.ability.name, true))
            msg.channel.send(newembed)
            console.log(chosenPokemon)

           
        const choice = args[1]
        switch(choice){
        case 'fight':{
            msg.channel.send(`You fought and did ${stat.base_stat} damage`)
            break
        }
        case 'run':{
            msg.channel.send(`You ran away!!`)
            break
        }
        }

        const ID = msg.author.id
        console.log(ID)
        const username = msg.member.user.tag;
        console.log(username)
        var information = [];
        information.push(username, ID)
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
    catch (err) {
        console.log(err);
        console.log('this works')
        msg.channel.send(`Pokemon ${pokemon} does not exist.`);
    }
        async function getPokemon(pokemon) {
            let response = await fetch(`${API_URL}/${pokemon}`);
        return await response.json();
        }
    }
    

}