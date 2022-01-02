module.exports = {
name: "daily",
code: `
$title[1;**Daily collected**]
$color[1;$getVar[color]]
$description[1;**You collected your daily of $numberSeparator[$random[1000;5000];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$globalCooldown[24h;**Please come back again in %time% to collect more $getServerVar[symbol]**]`}