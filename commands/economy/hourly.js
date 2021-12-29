module.exports = {
name: "hourly",
code: `
$title[1;**Hourly collected**]
$color[1;$getVar[color]]
$description[1;**You collected your hourly of $numberSeparator[$random[100;500];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;500]]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$globalCooldown[1h;**Please come back again in %time% to collect more $getServerVar[symbol]**]`}