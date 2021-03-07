const ping = require("./commands/ping")
const select = require("./commands/select")
const gif = require("./commands/gif")
const meme = require("./commands/meme")
const say = require("./commands/say")
const joke = require("./commands/joke")
const avatar = require("./commands/avatar")
const roaster = require("./commands/roaster")
const quote  = require("./commands/quote")
const help = require("./commands/help")
const invite = require("./commands/invite")
const weather = require("./commands/weather")
const about = require("./commands/about")
const fact = require("./commands/fact")
const lookfor = require("./commands/lookfor")
const rps = require("./commands/rps")

const commands = {
 ping,select,gif,meme,say,joke,avatar,roaster,quote,help,invite,weather,about,fact,lookfor,rps
 
}
module.exports = async function (msg) {
   try{
    let args = msg.content.split(" ")
    let command = args.shift()
    if (command.charAt(0)=="*"){
        console.log(`Used ${command} in ${msg.guild.name}\n by user ${msg.author.username}`)
        command = command.substring(1).toLowerCase()
        commands[command](msg,args)
}
}catch(err){console.error(err)}
}
