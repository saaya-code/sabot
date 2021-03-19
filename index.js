const Discord = require('discord.js');
const client = new Discord.Client();
const Topgg = require('@top-gg/sdk')
require('dotenv').config();
const api = new Topgg.Api(process.env.TOPGG)
client.login(process.env.TOKEN)
const commandHandler = require("./commands");
client.on("message",commandHandler)  
client.on('ready',()=>{
    const Guilds = client.guilds.cache.map(guild => guild.id)
    arr = client.guilds.cache.map(g=>g.name)
    console.log(`Running on ${Guilds.length} Servers : ${arr.join(" / ")}`)
    client.user.setPresence({ activity: { name: `${client.users.cache.size} members | running on ${Guilds.length} servers.| Use *help` , type: 'WATCHING'}, status: 'online' })
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

