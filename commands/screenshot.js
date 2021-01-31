const app = require("puppeteer")
var fs = require('fs')
var options = {
    path : `../Sabot/screenshots/saved.png`,
    fullPage : false
}
async function product(url){
    const browser = await app.launch()
    const page = await browser.newPage()
    await page.goto(url)
        await page.screenshot(options)
        await browser.close()
    }
module.exports = async function(msg,args){
    try{
    urll = args[0]
await msg.reply("Fetching data please wait..").then(async (msg1)=>{ 
    try{
    await product(urll)
    await msg.reply(`Here's the screenshot you requested`, { files: [`../Sabot/screenshots/saved.png`] });
     msg1.delete();
    } catch(err){
        msg1.delete()
        msg.reply(`Invalid link provided if not please report this bug to <@${"398147766687236107"}>`)
    }
})
}
catch(err){console.error(err)
    msg.react("❌")
    
}
}