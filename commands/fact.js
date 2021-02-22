const Discord = require('discord.js')
const fetch = require("node-fetch")
module.exports = async function(msg){
    try{
 fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(async (res)=>{
     res1 = await res.json()
     const embed = new Discord.MessageEmbed()
     .setColor(msg.member.displayHexColor)
     .setTitle("Random useless fact : ")
     .setThumbnail("https://scontent.ftun3-1.fna.fbcdn.net/v/t31.0-0/p600x600/1400332_180652528794325_2075992954_o.png?_nc_cat=111&ccb=3&_nc_sid=85a577&_nc_ohc=VBXWF8MaTgEAX-sZzD-&_nc_oc=AQmi9UJzzVMhNoKWvGTiTicW3-uf3dc8dJ9GLDLg6n0mEA6NMJkJcHx-2aHgEFpHc3E&_nc_ht=scontent.ftun3-1.fna&_nc_tp=30&oh=700fff444867addb203d6466d8fa4e1f&oe=605772B2")
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
