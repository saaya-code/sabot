const Discord = require('discord.js');
module.exports = async function(msg, args){
const user = msg.mentions.users.first() || msg.author;
var color = msg.member.displayHexColor;
const avatarEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(user.username)
    .setImage(user.displayAvatarURL())
msg.channel.send(avatarEmbed);
}