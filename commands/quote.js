const fetch = require("node-fetch")
const Discord = require('discord.js');
module.exports = async function(msg){
    try{
const url = "https://api.quotable.io/random";
    response = await fetch(url)
    json = await response.json();
    const embed = new Discord.MessageEmbed()
    .setFooter(json.author)
    .addField('Quote : ',json.content)
    .setColor("#00FFFF")
    .setImage('https://lh3.googleusercontent.com/AlSLYTv0cCe4oLJw7mHeZ8jGD65e6IR8V3MGtXFgbWlAjg0PrpGTGASk1PsRc4bufMiBgXe38ZShWPDdEIo1cLJJjQ=w640-h400-e365-rj-sc0x00ffffff');
    msg.channel.send(embed)
    console.log('!quote in '+msg.channel.name)
    console.log(json.content)
}
catch(err){  
    console.log(err)
    msg.react("❌") 
}
}