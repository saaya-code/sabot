const Discord = require('discord.js');
const client = new Discord.Client();
const Topgg = require('@top-gg/sdk')
const logger = require("./commands/info/logger")
require('dotenv').config();
const api = new Topgg.Api(process.env.TOPGG)
client.login(process.env.TOKEN)
const fetch = require("node-fetch").default;
const commandHandler = require("./commands");
client.on("message",commandHandler)  
client.on('ready',()=>{
    const Guilds = client.guilds.cache.map(guild => guild.id)
    arr = client.guilds.cache.map(g=>g.name)
    console.log(`Running on ${Guilds.length} Servers : ${arr.join(" / ")}`)
    client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'idle' })
    setInterval(()=>{
        client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'idle' })
    },180000);
    
});

    client.on("guildCreate",(g) => { 
        const Guilds = client.guilds.cache.map(guild => guild.id) 
        console.log(`Joined new guild: ${g.name}`);
        client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'idle' })
        api.postStats({
            serverCount: client.guilds.cache.size
          })
    });
    client.on("guildDelete",(g) => { 
        const Guilds = client.guilds.cache.map(guild => guild.id) 
        console.log(`left guild: ${g.name}`);
        client.user.setPresence({ activity: { name: `${process.env.MODE}` , type: 'WATCHING'}, status: 'online' })
        api.postStats({
            serverCount: client.guilds.cache.size
          })
    });
    client.on("message",(msg)=>{
        if (msg.guild==null && !msg.author.bot){
            console.log(`${msg.author.tag} sent ${msg.content} privately to the bot.`)
        }
    })
       


//logging section
 client.on("channelCreate",(channel)=>{
     try{
         if(channel.guild.id==process.env.GUILDID)
     logger.createChannel(channel,client)
    
}catch(err){
    console.error(err)
}
 })

 client.on("channelDelete",(channel)=>{
    try{
        if(channel.guild.id==process.env.GUILDID)
        logger.deleteChannel(channel,client)
   }catch(err){
       console.error(err)
   } })

client.on("channelPinsUpdate",(channel,time)=>{
    //to be worked on
    
})
 
client.on("channelUpdate",(oldChannel,newChannel)=>{
    try{        
         if(oldChannel.guild.id==process.env.GUILDID)

        logger.updateChannel(oldChannel,newChannel,client)
   }catch(err){
       console.error(err)
   }})

     
   client.on("emojiCreate", function(emoji){
    try{
        if(emoji.guild.id==process.env.GUILDID)
        logger.createEmoji(emoji,client)
   }catch(err){
       console.error(err)
   }
});

client.on("emojiDelete",(emoji)=>{
    try{
        if(emoji.guild.id==process.env.GUILDID)
        logger.deleteEmoji(emoji,client)
       }
    catch(err){
        console.error(err)
       }
});

client.on("emojiUpdate",(oldEmoji,newEmoji)=>{
    try{
        if(oldEmoji.guild.id==process.env.GUILDID)
        logger.updateEmoji(oldEmoji,newEmoji,client)
       }
    catch(err){
        console.error(err)
       }
})

client.on("guildBanAdd",(guild, bannedMember)=>{
    try{
        if(guild.id==process.env.GUILDID)

        logger.guildBanAdd(guild,bannedMember,client)
       }
    catch(err){
        console.error(err)
       }
})



client.on("guildBanRemove", function(guild, user){
    try{
        if(guild.id==process.env.GUILDID)

        logger.guildBanRemove(guild, user, client)
       }
    catch(err){
        console.error(err)
       }
});


client.on("guildMemberAdd", function(member){
    try{
        if(member.guild.id==process.env.GUILDID)
        logger.guildMemberAdd(member,client)
        if(member.guild.id=="783404400416391189")
        logger.issatTag(member,client)
       }
    catch(err){
        console.error(err)
       }});

       client.on("message",msg=>{
       var role = msg.guild.roles.cache.find(R => R.id =="918937715217690634")
        if(msg.content=="start" && (msg.author.id=="398147766687236107"||msg.author.id=="364896741742477313")){
            count=0;
            msg.channel.send("Starting operation..").then((msg1)=>{
                msg.guild.members.cache.filter(i => !i.hasPermission("ADMINISTRATOR")).map((value, key) => {
                    value.roles.add(role)
                    count++;
                    });
                    msg1.edit(`Succesfully changed ${count} members roles.`)
              
            })
           
            
        }
    })

const deletedMessages = new Map();

    client.on("messageDelete", function(msg){
        console.log(msg);
        if(deletedMessages.has(msg.channel.id)){
            arr = deletedMessages.get(msg.channel.id)
            arr.unshift(msg)
            deletedMessages.set(msg.channel.id,arr)
        }else if(msg.content!=''){
            arr2=[];
            arr2.push(msg)
            deletedMessages.set(msg.channel.id,arr2)
        }
    });

    client.on("message",(msg)=>{    
        if(msg.content.startsWith("*snipe")&&!msg.author.bot){
            arr = deletedMessages.get(msg.channel.id)
            try{
            if(arr){
               date = (new Date()).toLocaleString();
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(arr[0].author.username,arr[0].author.avatarURL())
                    .setColor("#FFCCCB")
                    .addField("\u200b",arr[0].content)
                    .setFooter(date)
                    msg.channel.send(embed)
                }else{
                    msg.reply("There are not cached deleted messages in this channel.")
                }
            }catch(err){
                console.error(err);
                msg.react("❌");
            }
            }
        }
    )