const Discord = require('discord.js')
const fetch = require("node-fetch")
module.exports = async function(msg){
    try{
 fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(async (res)=>{
     res1 = await res.json()
     const embed = new Discord.MessageEmbed()
     .setColor(msg.member.displayHexColor)
     .setTitle("Random useless fact : ")
     .setThumbnail("https://img.youtube.com/vi/IsJWXOa4vrQ/sddefault.jpg")
     .addField("\u200B",res1.text) 
     .setFooter(`**Congrats you just wasted ${res1.text.length / 25} seconds reading this fact !**` )
    msg.channel.send(embed)

 
    })  
    .catch((err)=>{
        console.error("An error has occured while getting fact "+err)
    })
}
catch(err){console.error(err)
    msg.react("❌")
}
}
