const fetch = require("node-fetch")
require('dotenv').config();
const Discord = require("discord.js")
module.exports = async function(msg,args){
keyWord=args.join(" ")
if(keyWord.length<1){
	msg.reply("Please specify a valid argument.")
	return false;
}
else{
	fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete?text=${keyWord}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.SPELL,
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
})
.then(async (response) => {
	i=0;
	response.json().then((res)=>{
		const embed = new Discord.MessageEmbed()
		.setColor(msg.member.displayHexColor)
		.setTitle("Auto words complete.")
		.setThumbnail("https://pbs.twimg.com/profile_images/1045591018110963712/PWeDPcPR_400x400.jpg")
		res.forEach(e => {
			i++
			embed.addField(`Word #${i} :`,"`"+e+"`")
		});
		msg.reply(embed)
	})
	
	
})
.catch(err => {
	console.error(err);
});
}
}