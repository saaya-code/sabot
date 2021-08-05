const Discord = require('discord.js');
const channelId = "872514834355331123";



var logger = {};
//container for all the logging methods


logger.createChannel = async (channel, client)=>{
    const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const creator = Entry.executor || "Someone"
    const embed = new Discord.MessageEmbed()
    .setTitle("New Channel Created")
    .addField("Type : ", channel.type)
    .addField("Created at : ", channel.createdAt,true)
    .addField("Timestamp : ", channel.createdTimestamp,true)
    .addField('Name :', client.channels.cache.get(channel.id).toString())
    .addField("ID : ", channel.id)
    .addField("Created by :", creator)
    .setColor("#FF6347")
    .setThumbnail("https://miro.medium.com/max/2000/1*Pn7Cp-mxO4NcEhc35GMQKQ.jpeg")
    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)
}



logger.deleteChannel = async (channel, client)=>{
    const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_DELETE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const deletor = Entry.executor || "Someone"
    const embed = new Discord.MessageEmbed()
    .setTitle("Channel Deleted")
    .addField("Type : ", channel.type)
    .addField('Name :', channel.name)
    .addField("ID : ", channel.id)
    .addField("Deleted by :", deletor)
    .setColor("#FF6347")
    .setThumbnail("https://miro.medium.com/max/2000/1*Pn7Cp-mxO4NcEhc35GMQKQ.jpeg")
    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)
}

logger.updateChannel = async (oldChannel, newChannel, client)=>{
  let changes = [];
    const AuditLogFetch = await newChannel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_DELETE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const changer = Entry.executor || "Someone"
    const embed = new Discord.MessageEmbed()
    .addField("Changes : ","\u200B")
    .setTitle("Updated Channel")
    .setColor("#FF6347")
    .addField("Changes commited by ", changer)
    .setThumbnail("https://miro.medium.com/max/2000/1*Pn7Cp-mxO4NcEhc35GMQKQ.jpeg")

    for(i in newChannel){
        if(newChannel[i]!=oldChannel[i] && i!="permissionOverwrites"){
            changes.push(i)
        }
    }
    if(changes.length>=1){
        for(i=0;i<changes.length;i++){
         embed.addField(`Old ${changes[i]} : `, oldChannel[changes[i]])
         embed.addField(`New ${changes[i]} : `, newChannel[changes[i]])
        }
      logsChannel = client.channels.cache.get(channelId)
      logsChannel.send(embed)
    }
   

}

logger.createEmoji = async (emoji,client) =>{
    const AuditLogFetch = await emoji.guild.fetchAuditLogs({limit: 1, type: "EMOJI_CREATE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const adder = Entry.executor || "Someone"
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle("Emoji added")
    .addField("Animated type : ",emoji.animated)
    .addField("Emoji added at : ",emoji.createdAt)
    .addField("Emoji name : ", emoji.name)
    .setThumbnail(emoji.url)
    .addField("Emoji added by user : ", adder)

    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)
}

logger.deleteEmoji = async (emoji, client) =>{
    const AuditLogFetch = await emoji.guild.fetchAuditLogs({limit: 1, type: "EMOJI_DELETE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const deletor = Entry.executor || "Someone"
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle("Emoji deleted")
    .addField("Animated type : ",emoji.animated)
    .addField("Emoji deleted at : ",emoji.createdAt)
    .addField("Emoji name : ", emoji.name)
    .setThumbnail(emoji.url)
    .addField("Emoji deleted by user : ", deletor)

    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)
}



logger.updateEmoji = async (oldEmoji, newEmoji, client)=>{
   let changes = [];
    const AuditLogFetch = await oldEmoji.guild.fetchAuditLogs({limit: 1, type: "EMOJI_UPDATE"}); // Fetching the audot logs.
    const Entry = AuditLogFetch.entries.first(); 
    const editor = Entry.executor || "Someone"  
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle("Emoji Updated")
    .setThumbnail(newEmoji.url)
    for(i in newEmoji){
        if(newEmoji[i]!=oldEmoji[i]){
            changes.push(i)
            console.log(i)
        }
    }
    if(changes.length>=1){
        for(i=0;i<changes.length;i++){
         embed.addField(`Old ${changes[i]} : `, oldEmoji[changes[i]])
         embed.addField(`New ${changes[i]} : `, newEmoji[changes[i]])
        }
    }
    embed.addField("Emoji updated by user : ", editor)

    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)
}

module.exports = logger;
