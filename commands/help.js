const Discord = require('discord.js');
module.exports = async function(msg){
 const embed = new Discord.MessageEmbed()
 .setColor(msg.member.displayHexColor)
 .setTitle("Github links").setURL("https://github.com/saaya-code/Sabot")
 .setFooter("<argument>: required argument | [argument]: optional argument")
 .addField("General commands",'\u200b')
 .addField("Avatar","`!avatar` [mention] : Shows the tagged person or the user who commited to command's avatar (in case no one was tagged).")
 .addField("Gif","`!gif` [Search term] : Sends a gif from tenor specified by your search term or a random gif (in case no search term was provided)." )
 .addField("Joke","`!joke` : Sends a random joke.")
 .addField("Ping", "`!ping` : Replies with your current client ping.")
 .addField("Meme","`!meme` [Subreddit name] : Sends a random picture from the subbredit you provide or Dankmemes/memes/me_irl (in case no Subbredit name was provided).")
 .addField("Quote","`!quote` : Sends a random quote.")
 .addField("Roaster","`!roaster` : Showcases the list of members that have a role named exactly **Clash Roaster**.")
 .addField("Say","`!say` <sentence> : Delete the user's sentence and send it instead.")
 .addField("Select","`!select` [(option)] <argument1> <argument2>.. : Chooses one random element from the arguments you can specify the title by writing it instead of the option (must be between parentheses) If no option it specified the default value is set to 'Selection'.")
 .addField("Invite","`!invite` : Creates an invite link so you can add the bot to your server.")
 msg.channel.send(embed)
}