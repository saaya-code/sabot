const Discord = require('discord.js');
module.exports = async function(msg){
    try{
    var color = msg.member.displayHexColor;
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail("https://cdn.discordapp.com/avatars/759795320254496768/61188b7f3cc87950a7b48e2aac0c185e.png")
    .setFooter('Made by saàya#1206')
    .addField('This bot is made for educational purposes any feedback is appreciated.',"\u200B")
    .setTitle("Join our support server !")
    .setURL('https://discord.gg/92nbqStPXm')
    .addField("For more info visit :","[https://top.gg/bot/759795320254496768](https://top.gg/bot/759795320254496768)")
    msg.channel.send(embed)
}
catch(err){
    console.error(err)
    msg.react("❌")
}
}