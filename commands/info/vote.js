const Discord = require('discord.js');
module.exports = async function(msg){
    try{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var color = msg.member.displayHexColor;
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail("https://cdn.discordapp.com/avatars/759795320254496768/61188b7f3cc87950a7b48e2aac0c185e.png")
    .setFooter(today)
    .addField("\u200B","[**Click here to vote!**](https://top.gg/bot/759795320254496768/vote)")
    .addField("Voting for sabot",'\n You can vote for sabot every 12 hours. \n Voting will allow you to join future giveaways, the higher your votes count the higher your chance of winning is !')
    .setTitle("Vote for sabot")
    msg.channel.send(embed)
}
catch(err){
    console.error(err)
    msg.react("❌")
}
}