const Discord = require("discord.js")
const client = new Discord.Client();
var queue = new Map()

module.exports = async function(msg,args){
    if(!queue.has(msg.guild.id)&&args.join(" ")!="start"&&args.join(" ")!=""){
        msg.reply("There's no queue running in this server type `*q start` to start a new one.")
    }
else {
    switch (args.join(' ')){
    case "start" : start(msg)
    break;
    case "join" :  joins(msg)
    break; 
    case "next"  : next(msg)
    break;
    case "skip" : next(msg)
    break;
    case "stop"  : stop(msg)
    break;
    case "show" : show(msg)
    break;
    case "current" : current(msg)
    break;
    default: msg.reply("Please specify a valid argument use `*help` for more details.")
    
}
}
}

const start = async function(msg){
    if (queue.has(msg.guild.id)){
        msg.reply("A queue has already started in this server.")
    }
    else{
    queue.set(msg.guild.id,[])
    msg.reply("Queue successfully initialized");
}
}


const show = async function(msg){
    parts = []
const embed = new Discord.MessageEmbed()
.setColor(msg.member.displayHexColor)
.setTitle("Participants.")
parts = queue.get(msg.guild.id)
for(i=0;i<parts.length;i++){
embed.addField(`Participiant N° ${i+1}`,parts[i]);
}
msg.channel.send(embed)
}

const joins = async function(msg){
parts = queue.get(msg.guild.id)
if(parts.includes(msg.author)){
    msg.reply("You're already participating in this queue type `*q show`.")
}
else{
    parts.push(msg.author)
    queue.set(msg.guild.id,parts)
    msg.reply('Succesfully added to the queue')
}
}

const stop = async function(msg){
 if(!msg.channel.permissionsFor(msg.author).has("MANAGE_MESSAGES")){
     msg.reply("You don't have the required permissions to perform this action.")
 }
 else{
    const filter = m => msg.author == m.author && (m.content.toLowerCase() == "yes" || m.content.toLowerCase() == "no")
    const collector = msg.channel.createMessageCollector(filter, { time: 15000, max:1 });
    msg.reply("Are you sure you want to delete the queue? (yes/no) ")
    collector.on('collect', m => {
        if(m.content.toLowerCase() == "no"){
            m.reply("Okay aborted.");
        }
        else{
            queue.delete(msg.guild.id)
            msg.reply('Queue deleted successfully.')
        }

    });
    collector.on("end",collected=>{
        if(collected.size<1){
            msg.reply("Timed out.")
        }
    })
 }
}


const current = async function(msg){
    parts = queue.get(msg.guild.id)
    if(parts.length==0){
        msg.reply("No one is currently speaking use `*q join` to join the queue.")
    }
else{
 const embed2 = new Discord.MessageEmbed()
 .setTitle("Currently speaking")
 .setDescription(parts[0])
 .setColor(msg.member.displayHexColor)
 msg.channel.send(embed2) 
}
}

const next = async function(msg){
    parts = queue.get(msg.guild.id)
    if(parts.length==0){
        msg.reply("No one is currently speaking use `*q join` to join the queue.")
    }
    else if(msg.author == parts[0] || msg.channel.permissionsFor(msg.author).has("MANAGE_MESSAGES")){
    parts.shift()
    queue.set(msg.guild.id,parts)
    msg.channel.send("Skipped ⏩ ")
    if(parts.length>0){
        id = parts[0].id
    msg.channel.send(`<@${id}> You're up.`)
}
   }
}
