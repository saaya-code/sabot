const Discord = require('discord.js');
const client = new Discord.Client();
const Topgg = require('@top-gg/sdk')
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
    client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'online' })
    setInterval(()=>{
        client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'online' })
    },180000);
});

    client.on("guildCreate",(g) => { 
        const Guilds = client.guilds.cache.map(guild => guild.id) 
        console.log(`Joined new guild: ${g.name}`);
        client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'online' })
        api.postStats({
            serverCount: client.guilds.cache.size
          })
    });
    client.on("guildDelete",(g) => { 
        const Guilds = client.guilds.cache.map(guild => guild.id) 
        console.log(`left guild: ${g.name}`);
        client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'online' })
        api.postStats({
            serverCount: client.guilds.cache.size
          })
    });
    client.on("message",(msg)=>{
        if (msg.guild==null && !msg.author.bot){
            console.log(`${msg.author.tag} sent ${msg.content} privately to the bot.`)
        }
    })

     client.on("message",msg=>{
         if(msg.mentions.users.first() == client.user && !msg.author.bot && msg.content.split(" ").length>1){
            result = msg.content.split(" ")
            indice = result.indexOf(`<@!${client.user.id}>`)
            rees = result.splice(indice,1) 
            console.log(result.join(" ")) 
            fetch(`https://api.snowflakedev.xyz/api/chatbot?message=${encodeURIComponent(result.join(" "))}&name='sabot'`, {
                headers: {
                    "Authorization": process.env.SNOWAPI
                }
            })
                .then(res => res.json())
                .then(data => {
                    msg.channel.send(data.message);
                    console.log(`${msg.author.username} is talking to me saying ${result.join(" ")} \n and I replied ${data.message}`)
                })
                .catch(e => console.error('An error occured. Please ensure if you provided the correct details'));
              }
            })
         
    
    
  