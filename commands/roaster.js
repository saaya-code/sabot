const Discord = require('discord.js');
module.exports = async function(msg){
    try{
var color = msg.member.displayHexColor;
i=1;
Role = msg.guild.roles.cache.find(R => R.name =="Clash Roaster")
const min = new Discord.MessageEmbed()
.setTitle('Clash Roaster')
.setColor(color)
Role.members.forEach((member)=>{

min.addField(`Player ${i}` ,member)
i++;
})
msg.channel.send(min)
}
catch(err){console.log(err)
    msg.react("❌")}
}