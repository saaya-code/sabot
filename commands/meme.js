const fetch = require("node-fetch")
module.exports = async function(msg,args) {
    try{

word = args.join(" ")
const url = `https://meme-api.herokuapp.com/gimme/${word}`
response = await fetch(url);
json = await response.json();
console.log(word)
if (json.code == '404'){
    msg.channel.send(json.message)
}
else{
await msg.delete();
msg.reply('Here\'s a meme from /r/'+json.subreddit)
msg.channel.send(json.url)
console.log('!meme in '+msg.channel.name)
} 
}catch(err){
console.error(err)
msg.react("❌")

}}
