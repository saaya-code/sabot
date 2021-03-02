const Discord = require('discord.js');
class people{
    constructor(id,reaction){
        this.id == id
        this.reaction == reaction
    }
}
module.exports = async function(msg,args){
const embed = new Discord.MessageEmbed()
.setTitle('Surprise for an extraordinary person..')
.setThumbnail('https://cdn.discordapp.com/attachments/810273831720976455/815676859945320449/comic-style-surprise-illustration.png')
.setColor("#FF6347")
.addField("Please wait... ")
msg.author.send(embed).then(async(msg1)=>{
    arr = ["😩","🍆","🦁","🧨","💎"]
    await msg1.react("😩")
    await msg1.react("🍆")
    await msg1.react("🦁")
    await msg1.react("🧨")
    await msg1.react("💎")
    await msg1.edit(new Discord.MessageEmbed().setTitle('Surprise for an extraordinary person..')
    .setThumbnail('https://cdn.discordapp.com/attachments/810273831720976455/815676859945320449/comic-style-surprise-illustration.png')
    .setColor("#FF6347")
    .addField("Choose from below",'What emoji represents you the most',false))
   let col = msg1.createReactionCollector((react)=>{ arr.contains(react.emoji.name)},{time:50000})
   col.on("collect")

})



} 