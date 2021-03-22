const fetch = require("node-fetch")
const Discord = require("discord.js")
module.exports = async function(msg,args){

fetch("https://www.affirmations.dev").then((res)=>{
  res.json().then((resp)=>{
    const embed = new Discord.MessageEmbed()
    .setTitle("\u200B")
    .addField(resp.affirmation,"\u200B")
    .setColor(msg.member.displayHexColor)
    .setFooter("Hopefully you're doing great otherwise I hope things get better 🌸")
    .setThumbnail("https://freedesignfile.com/upload/2020/02/Smile-hand-drawn-emoji-vector.jpg")
    msg.channel.send(embed)
  })
})
}