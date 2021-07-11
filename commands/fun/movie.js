const discord = require("discord.js");
const fetch = require("node-fetch");
require("dotenv").config();

module.exports = async function(msg,args) {
try{


var data = await fetch(`http://www.omdbapi.com/?apikey=${[process.env.MOVIEAPI]}&t=${args.join(" ")}"`)
var dataJson = await data.json()
console.log(dataJson)
if(dataJson.Poster=="N/A"){
    return  msg.reply("There was an error validating your request.")
}

if(dataJson.Response=="False"){
    msg.reply("I couldn't find the movie you're looking for please check the name and try again.")
    return false;
}
const embed = new discord.MessageEmbed()
.setTitle(dataJson.Title)
.addField("Actors : ",dataJson.Actors)
.addField("Awards : ", dataJson.Awards,true)
.addField("BoxOffice :    ", dataJson.BoxOffice,true)
.addField("Country : " , dataJson.Country,true)
.addField("Director : ", dataJson.Director)
.addField("Released : ", dataJson.Released)
.addField("Runtime : ", dataJson.Runtime)
.addField("Genre : ", dataJson.Genre)
.addField("Original language : ", dataJson.Language)
.addField("Imbd Rating : ", dataJson.imbdRating)
.addField("Plot : ", dataJson.Plot)
.setFooter(`Writer : ${dataJson.Writer}`,dataJson.Poster)
.setThumbnail(dataJson.Poster)
.setColor(msg.member.displayHexColor)

msg.channel.send(embed)
}
catch(err){
    msg.react("❌")
}
}