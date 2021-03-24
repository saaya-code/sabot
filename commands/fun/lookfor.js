const Discord = require('discord.js');
const fetch = require("node-fetch")
module.exports = async function(msg,args){
    try{
    const url = `https://www.api.toys/api/check_dictionary?text=${args.join("")}`
     fetch(url).then(async (res)=>{
        response = await res.json();
        console.log(response)
      if (response.found){
        const embed = new Discord.MessageEmbed()
        .setColor(msg.member.displayHexColor)
        .setTitle("Does this word exist in english ?")
        .addField("\u200B",args.join('')+` was **found** in english dictionary`)
        .setThumbnail("https://www.auathailand.org/wp-content/uploads/2020/05/98316865_2944133432308608_4940618798915911680_n-600x600.jpg")
        msg.channel.send(embed)
        console.log(response.found)
      }
      else{
        const embed = new Discord.MessageEmbed()
        .setColor(msg.member.displayHexColor)
        .setTitle("Does this word exist in english ?")
        .addField("\u200B",args.join('')+` was **not found** in english dictionary`)
        .setThumbnail("https://www.auathailand.org/wp-content/uploads/2020/05/98316865_2944133432308608_4940618798915911680_n-600x600.jpg")
        msg.channel.send(embed)

      }
     })
     .catch(err => console.error(err))

    }
    catch(err){
        console.error(err)
        msg.react("❌")
    }
    
   

}