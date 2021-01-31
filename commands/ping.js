module.exports = async function (msg) {
    try{
    msg.channel.send("Loading data..").then(async msg1=>{

        msg.reply(`Bot's ping is ${msg1.createdTimestamp - msg.createdTimestamp} ms `)
        await msg1.delete()

    })
} catch(err){console.log(err)
    msg.react("❌")}
}
