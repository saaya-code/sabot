const Discord = require('discord.js');
const lookfor = require('../fun/lookfor');
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
    changes = [];
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
    }
    logsChannel = client.channels.cache.get(channelId)
    logsChannel.send(embed)

}


module.exports = logger;