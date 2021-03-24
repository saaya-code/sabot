const Discord = require('discord.js');

module.exports = async function (msg) {
    try{
 str = msg.content.substring(8,msg.content.length)
        if (str.includes('(')&&str.includes(')')){
option = str.substring(str.indexOf('(')+1,str.indexOf(')'))
str=str.substring(str.indexOf(')')+2,str.length)
}
else{
    str = msg.content.substring(8,msg.content.length)
 option ='Selection'
}
array = str.split(' ');
random = Math.floor(Math.random()*array.length)
var randomColor = Math.floor(Math.random()*16777215).toString(16);

const Embedd = new Discord.MessageEmbed()
             .setColor(randomColor)
             .setTitle(option)
             .addField("The bot choose",array[random])
             msg.reply(Embedd)
             console.log('!select in '+msg.channel.name)
             console.log('Option : '+option)
             console.log('Things : '+array)

            }
            catch(err){
                console.error(err)
                 msg.react("❌")
                }            
        }
       