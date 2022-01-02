module.exports = {
name: "weekly",
code: `
$title[1;**Weekly collected**]
$color[1;$getVar[color]]
$description[1;**You collected your weekly of $numberSeparator[$random[10000;50000];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10000;50000]]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$globalCooldown[1w;**Please come back again in %time% to collect more $getServerVar[symbol]**]`}