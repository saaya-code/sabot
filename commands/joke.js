const fetch = require("node-fetch")

module.exports = async function (msg) {
    try{

let link = `https://official-joke-api.appspot.com/random_joke`
response = await fetch(link)
json = await response.json()
msg.reply(json.setup)
setTimeout(() => {
msg.channel.send(json.punchline)
}, 5000);
}catch(err){console.error(err)
    msg.react("❌")

}
}