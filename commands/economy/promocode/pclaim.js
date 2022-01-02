module.exports = {
name: "promocode",
aliases: ['pclaim','promo'],
code: `
$setServerVar[worth;0]
$setServerVar[promocode;&-+++aA++]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[worth]]]
$color[1;$getVar[color]]
$description[1;**<:pgen:925861662639161405> you claimed the promocode which was worth $numberSeparator[$getServerVar[worth];,]$getServerVar[symbol]
**]
$onlyIf[$toLowerCase[$message]==$getServerVar[promocode];Not a valid promocode]`

}
