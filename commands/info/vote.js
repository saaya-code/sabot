const Discord = require('discord.js');
const Topgg = require(`@top-gg/sdk`)
require('dotenv').config();

const api = new Topgg.Api(process.env.TOPGG);

module.exports = async function(msg,args){
    try{
        if(args.length==0){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var color = msg.member.displayHexColor;
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail("https://cdn.discordapp.com/avatars/759795320254496768/61188b7f3cc87950a7b48e2aac0c185e.png")
    .setFooter(today)
    .addField("\u200B","[**Click here to vote!**](https://top.gg/bot/759795320254496768/vote)")
    .addField("Voting for sabot",'\n You can vote for sabot every 12 hours. \n Voting will allow you to join future giveaways, the higher your votes count the higher your chance of winning is !')
    .setTitle("Vote for sabot")
    msg.channel.send(embed)
}
else if(args[0]=="check"){
    target = msg.mentions.users.first() || msg.author
    if (target.bot){
        msg.reply("Please choose a valid user.").then((msg1)=>{
            setTimeout(()=>{
                msg1.delete();
            },3000)
        })
        return false;
    }
    voted = await api.hasVoted(target.id)
    if(voted){
        msg.channel.send(`User ${target} voted for the bot !`)
    }
    else{
        msg.channel.send(`User ${target} hasn't voted for the bot yet :( !`)
    }
}
else if(args[0]=="checkall"){
    if(msg.author.id != "398147766687236107"){
        msg.reply("Sorry you don't have permission to use this command")
        return false;
    }
else{
    result = await api.getVotes()
    result = result.map(e=>e.username)
    msg.reply(result)
}
}
}
catch(err){
    console.error(err)
    msg.react("❌")
}
}