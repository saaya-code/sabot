const Discord = require('discord.js');
const fetch = require("node-fetch") 
module.exports = async function(msg,args){
    try{
    arg = args.join(' ').trim()
    BaseURL = `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${process.env.WEATHER}`
    response= await fetch(BaseURL)
     json = await response.json()
     var color = msg.member.displayHexColor;
     console.log(json)
     const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setTitle(`Weather now in ${arg}`)
     .addField('Weather', json.weather[0].main)
     .addField('Description', json.weather[0].description)
     .addField('Temperature', json.main.temp +' Kelvins')
     .addField('Humidity ',json.main.humidity + 'g.m-3')
     .addField('Pressure', json.main.pressure+ ' (Pa)')
     .setThumbnail(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
     .addField('Wind speeed',json.wind.speed +' m·s−1')
    msg.channel.send(embed)
}
catch(err){
    console.error(err)
    msg.react("❌")
}    
}