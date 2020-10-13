const commando = require('discord.js-commando');
const fs = require('fs');

const Discord = require('discord.js')
    

module.exports = class UnboxHydraCase extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hydra',
            group: 'csgo',
            memberName: 'hydra',
            description: 'Unbox the Hydra case.'
        })
    }
    async run(msg) {
      if(msg.content === "?fracture"){
        var caseopened = true

      }


    const images = [
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//coverts
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/02.png',
'https://vignette.wikia.nocookie.net/cswikia/images/1/15/Csgo-awp-oni-taiji-announce.png/revision/latest/top-crop/width/300/height/300?cb=20170922120819',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//coverts
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/02.png',
'https://vignette.wikia.nocookie.net/cswikia/images/1/15/Csgo-awp-oni-taiji-announce.png/revision/latest/top-crop/width/300/height/300?cb=20170922120819',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//blues
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/11.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/12.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/13.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/14.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/15.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/16.png',
'https://i.imgur.com/NYLvSyF.png',
//purples
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/06.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/08.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/07.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/09.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/10.png',
//pinks
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/03.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/04.png',
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/05.png',
//coverts
'https://steamcdn-a.akamaihd.net/apps/csgo/images/operationhydra/02.png',
'https://vignette.wikia.nocookie.net/cswikia/images/1/15/Csgo-awp-oni-taiji-announce.png/revision/latest/top-crop/width/300/height/300?cb=20170922120819',
//GLOVES
'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_emerald_web_light_large.0ac5fb6e5faf01860ba42d0c3378369d206d6d06.png']
    const image = images[Math.floor(Math.random() * images.length)];
    console.log(images.length)
    const randomWear = ['Factory New', 'Min. Wear', 'Field Tested', 'Well Worn', 'Battle Scarred']
    const wear = randomWear[Math.floor(Math.random() * randomWear.length)];             
{
            const random = new Discord.MessageEmbed()
              .setTitle('Spinning...')
              .setAuthor('Xurxx')
              .setImage('https://cdn.discordapp.com/attachments/726419340391350306/733722667731124264/ezgif-4-6457d879f742.gif')
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
      
            const spin = new Discord.MessageEmbed()
              .setTitle('You opened a case and got...')
              .setAuthor('Xurxx')
              .addFields(
                  {name: 'Wear: ', value: wear},
                  //{name: 'Float: ', value: floatValue, inline: true}
              )
              .setImage(image)
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
            
            if (wear === 'Factory New') {
                var floatValue = [(Math.random() * (0.000 - 0.0700) + 0.0700).toFixed(4)]
                console.log(floatValue)
            
            const spin2 = new Discord.MessageEmbed()
            .setTitle('You opened a case and got...')
            .setAuthor('Xurxx')
            .addFields(
                {name: 'Wear: ', value: wear},
                {name: 'Float:', value: floatValue, inline: true}
            )
            .setImage(image)
            .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")

            var Embedmsg = await msg.channel.send(random)
            await new Promise(r => setTimeout(r, 1200));
            
            //msg.delete()
            Embedmsg.edit(spin2);
              } 
            if (wear === 'Min. Wear') {
                var floatValue = [(Math.random() * (0.0700 - 0.1500) + 0.1500).toFixed(4)]
                console.log(floatValue)

              const spin3 = new Discord.MessageEmbed()
              .setTitle('You opened a case and got...')
              .setAuthor('Xurxx')
              .addFields(
                  {name: 'Wear: ', value: wear},
                  {name: 'Float:', value: floatValue, inline: true}
              )
              .setImage(image)
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
            
            var Embedmsg = await msg.channel.send(random)
            await new Promise(r => setTimeout(r, 1200));
            
            Embedmsg.edit(spin3);
              }
            if (wear === 'Field Tested') {
                var floatValue = [(Math.random() * (0.1500 - 0.3800) + 0.3800).toFixed(4)]
                console.log(floatValue)

              const spin4 = new Discord.MessageEmbed()
              .setTitle('You opened a case and got...')
              .setAuthor('Xurxx')
              .addFields(
                  {name: 'Wear: ', value: wear},
                  {name: 'Float:', value: floatValue, inline: true}
              )
              .setImage(image)
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
            
            var Embedmsg = await msg.channel.send(random)
            await new Promise(r => setTimeout(r, 1200));
            
            Embedmsg.edit(spin4);
              }
              if (wear === 'Well Worn') {
                var floatValue = [(Math.random() * (0.3800 - 0.4500) + 0.4500).toFixed(4)]
                console.log(floatValue)

              const spin5 = new Discord.MessageEmbed()
              .setTitle('You opened a case and got...')
              .setAuthor('Xurxx')
              .addFields(
                  {name: 'Wear: ', value: wear},
                  {name: 'Float:', value: floatValue, inline: true}
              )
              .setImage(image)
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
            
            var Embedmsg = await msg.channel.send(random)
            await new Promise(r => setTimeout(r, 1200));
            
            Embedmsg.edit(spin5);
              }
              if (wear === 'Battle Scarred') {
                var floatValue = [(Math.random() * (0.4500 - 1.0000) + 1.0000).toFixed(4)]
                console.log(floatValue)

              const spin6 = new Discord.MessageEmbed()
              .setTitle('You opened a case and got...')
              .setAuthor('Xurxx')
              .addFields(
                  {name: 'Wear: ', value: wear},
                  {name: 'Float:', value: floatValue, inline: true}
              )
              .setImage(image)
              .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
            
            var Embedmsg = await msg.channel.send(random)
            await new Promise(r => setTimeout(r, 1200));
            
            Embedmsg.edit(spin6);
              }
            {
                if (image === 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_emerald_web_light_large.0ac5fb6e5faf01860ba42d0c3378369d206d6d06.png'){
                return msg.reply('Congrats! You got gloves!!!')
            }
            }
        }
var countfile = fs.readFileSync("./counterhydra.txt", {"encoding": "utf-8"});
    if(caseopened = true){
    var counter = countfile;
  
  fs.writeFileSync("counterhydra.txt", countfile)
  counter +=1;
}   
  var counting = counter
  
  fs.writeFileSync("counterhydra.txt", counting.toString());
  console.log('The HYDRA case has been opened ' + countfile.length + ' times')
  fs.readFile("./information.txt", function (err, data) {
    if (err) throw err;
    var datata = data.toString('utf-8')
    if(data.includes('Xurxx#7879')){
     console.log((datata.length / 29) - .689655172413794)
    }
  });
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