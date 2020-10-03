const commando = require('discord.js-commando');
const fs = require('fs');
const util = require('util');
writeFile = util.promisify(fs.writeFile);
const client = new commando.CommandoClient
const Discord = require('discord.js')
    

module.exports = class UnboxFractureCase extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fracture',
            group: 'misc',
            memberName: 'fracture',
            description: 'Unbox the Fracture case.'
        })
    }
    
    async run(msg) {
           
if(msg.content === "?fracture") {
  var caseopened = true
}

    const images = [
        //coverts
        'https://www.ginx.tv/uploads/Andr%C3%A9s/AK-47_Legion_of_Anubis_by_Apel.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Desert_Eagle_Printstream.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //coverts
        'https://www.ginx.tv/uploads/Andr%C3%A9s/AK-47_Legion_of_Anubis_by_Apel.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Desert_Eagle_Printstream.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //coverts
        'https://www.ginx.tv/uploads/Andr%C3%A9s/AK-47_Legion_of_Anubis_by_Apel.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Desert_Eagle_Printstream.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //KNIFE
        'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aa_fade_light_large.f24efcbcc28c8f3ddf18e1d777cde462b5c0c739.png',
        ]
    const image = images[Math.floor(Math.random() * images.length)];
    console.log('The amount of images is ' + images.length)
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
                console.log('The float was ' + floatValue)
            
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
                if (image === 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aa_fade_light_large.f24efcbcc28c8f3ddf18e1d777cde462b5c0c739.png'){
                return msg.reply('Congrats! You got a knife!')
            }
            }
        }
var countfile = fs.readFileSync("./counterfracture.txt", {"encoding": "utf-8"});
if(caseopened = true){
  var counter = countfile;
  fs.writeFileSync("counterfracture.txt", countfile)
  counter +=1;
}   
  var counting = counter
  
  fs.writeFileSync("counterfracture.txt", counting.toString());
  console.log('The FRACTURE case has been opened ' + countfile.length + ' times')
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