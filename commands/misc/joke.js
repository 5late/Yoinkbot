const commando = require('discord.js-commando');
const axios = require('axios')
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'misc',
            memberName: 'joke',
            description: 'Sends a dad joke',
        })
    }
async run (msg) {
        let getJoke = async () => {
            let response = await axios.get(
                "https://official-joke-api.appspot.com/random_joke"
            );
            let joke = response.data;
            return joke;
        };
        let jokeValue = await getJoke();
        const Msg = await msg.channel.send(jokeValue.setup + ' | React with ▶️ to send punchline!')

        Msg.react('▶️')

        const filter = (reaction, user) => {
            return reaction.emoji.name === '▶️' && user.id === msg.author.id;
        }

        const collector = Msg.createReactionCollector(filter, { time: 15000 });

        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            msg.channel.send(jokeValue.punchline)
            Msg.edit(jokeValue.setup)
        });
        
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`)
        });
    }
}