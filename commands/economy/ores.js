module.exports = {
name: "ores",
$if: "v4",
aliases: "ore",
code: `
$title[1;**ores of $usertag[$get[u]]**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;
<:commontype:924810999628984320> **┇** <:quartz:926585163801067530> \`$numberSeparator[$getGlobalUserVar[quartz;$get[u]];,]\` <:amethyst:926585236211499018> \`$numberSeparator[$getGlobalUserVar[amethyst;$get[u]];,]\` <:obsidian:926585310719148052> \`$numberSeparator[$getGlobalUserVar[obsidian;$get[u]];,]\`

<:legendarytype:924811350734172161> **┇** <:ember:926585426490306600> \`$numberSeparator[$getGlobalUserVar[ember;$get[u]];,]\` <:emeralds:926585524347617300> \`$numberSeparator[$getGlobalUserVar[emerald;$get[u]];,]\` <:crystal:926585587148927016> \`$numberSeparator[$getGlobalUserVar[crystal;$get[u]];,]\`]
$let[u;$findUser[$message;yes]]`}