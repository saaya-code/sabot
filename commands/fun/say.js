module.exports = async function (msg,args) {
    try{
said = args.join(" ")
        msg.channel.send(said)
        msg.delete().catch((err)=>{
            console.error(err)
        })
    }catch(err){
        console.log(err)
        msg.react("❌")

    }
    }