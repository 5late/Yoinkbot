const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix  = '?'

module.exports = class StoryCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'story',
            group: 'misc',
            memberName: 'story',
            description: 'Generate a story',
            args:[
              { 
                  key:'text',
                  prompt: 'Who would you like to be the main character in this story?',
                  type: 'string',
              }
          ]
        })
    }

async run (msg) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let ruser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]))
      let rMember = args[0]
      let people = await msg.guild.members.fetch();
      let winner = msg.guild.members.cache.random().username
      const player = rMember.username

    const StoryStart =['Once upon a time, ', 'In a land far, far away, ', 'There was once a person named ', 'In a magical land in a parallel universe, ', ' Our story begins with our main character, ' ]
    const storystart = StoryStart[Math.floor(Math.random() * StoryStart.length)];

    const secondaryCharacter = winner;
    const Introduction = [' was going to the store ', ' was sitting at home on the couch, ', ' was walking to a restaurant ', ' was getting out of bed, ']
    const introduction = Introduction[Math.floor(Math.random() * Introduction.length)];
    
    const SuddenAction = ['when SUDDENLY, ', 'when all of a sudden ', 'when shockingly ']
    const suddenaction = SuddenAction[Math.floor(Math.random() * SuddenAction.length)];

    const WeirdThing = ['they saw a puff of smoke appear ', 'a green wall appeared ', 'a black portal appeared ']
    const weirdthing = WeirdThing[Math.floor(Math.random() * WeirdThing.length)];

    const Enemy = ['a large bug stepped out ', 'a masked figure emerged ', 'a red creature fell out']
    const enemy = Enemy[Math.floor(Math.random() * Enemy.length)];

    const FallBack = [' fell backwards in shock! ', ' took a step backwards in shock.', ' jumped backwards and tripped over a stone.']
    const fallback = FallBack[Math.floor(Math.random() * FallBack.length)];

    const Fight = [' immediately drew their sword and smashed it upon the newfound enemy. ', ' whipped out a bow and arrow and shot the first fire arrow into the heart of the enemy. ', ' grabbed the nearest stone and threw it at full force towards the anonymous being. ', ' picked up the enemy from the ground and threw it to the ground with force. ']
    const fight = Fight[Math.floor(Math.random() * Fight.length)];

    const FightBack = ['The enemy fought back with its sword of poison. ', 'The enemy returned fire with its machine gun. ', ' The enemy was enraged, shooting lava out of its nose. ']
    const fightback = FightBack[Math.floor(Math.random() * FightBack.length)];

    const FallingAction = ['This however, was no power against the protagonist, who had the power of friendship ', 'The enemies were no match for our friend, who simply told the enemy to stop. The enemy, no longer having consent, immediately stopped all attacks. ', 'Our friend however, stayed on top, and defeated the evil enemy. ', 'Thankfully, our friend has power above all, leading them to take the easy win against such a beast ']
    const fallingaction = FallingAction[Math.floor(Math.random() * FallingAction.length)];

    const Closing = ['The beast slowly walked away, leaving our friend victorious', 'The enemy slowly slunk away, making the protagonist the obvious victor.', 'This makes our friend the winner, giving them enormous bragging rights.']
    const closing = Closing[Math.floor(Math.random() * Closing.length)];

const finalstory = [storystart + rMember + introduction + suddenaction + weirdthing + enemy + rMember + fallback + rMember + fight + fightback + fallingaction + closing + rMember + ' Congratulations.']

const embed = new Discord.MessageEmbed()
.setTitle(`Story Generator`)
.setColor('RANDOM')
.setDescription(finalstory)
.setFooter(`Yoinkbot may collect some data. Use command ?owner to contact the owner to learn more.`)

msg.channel.send(embed)
    }
}