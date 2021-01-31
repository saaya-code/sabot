const Discord = require('discord.js');
const client = new Discord.Client();
bot = client.users.cache.get("759795320254496768")
module.exports = async function(msg){
const embed = new Discord.MessageEmbed()
.setColor(msg.member.displayHexColor)
.setTitle("Add me to your server ! " ).setURL("https://discord.com/api/oauth2/authorize?client_id=759795320254496768&permissions=1544023121&redirect_uri=https%3A%2F%2Flocalhost&scope=bot")
.setFooter("Creator saàya#1206")
.setThumbnail("https://cdn.discordapp.com/avatars/759795320254496768/a2834499d1038d3ef4f29352a8501fd7.webp")
msg.channel.send(embed)
}