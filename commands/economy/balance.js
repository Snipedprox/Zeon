module.exports = {
name: "balance",
aliases: ['bal','money','cash','wallet'],
code: `
$title[1;**$userTag[$get[u]]'s wallet**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$get[u]]]

$description[1;
<:wallet:924320830748491867>** Wallet $getVar[sep]** **[$numberSeparator[$truncate[$getGlobalUserVar[cash;$get[u]]];,]]($getVar[support])**$getServerVar[symbol]
<:bsymbol:924321320462876732> **Bank $getVar[sep]** **[$numberSeparator[$truncate[$getGlobalUserVar[bank;$get[u]]];,]]($getVar[support])** **/** **[$numberSeparator[$getGlobalUserVar[bankspace;$get[u]];,]]($getVar[support])**$getServerVar[symbol]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$let[u;$mentioned[1;yes]]
`}