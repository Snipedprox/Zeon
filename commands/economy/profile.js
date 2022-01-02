module.exports = {
name: "profile",
$if: "v4",
aliases: ['prof','pro'],
code: `
$title[1;**$username[$get[u]]'s profile**]
$color[1;$getVar[color]]
$description[1;
**==========**
**$replaceText[$replaceText[$replaceText[$getGlobalUserVar[location];land;<:biomeland:925107838743896094> Island];volcano;<:biomevalcanicland:925107839075238008> Volcano];moon;<:biomemoon:925107838659997717> Moon]** 
**==========**
<:heartsss:924702337069625384> **Commands issued:** \`$numberSeparator[$getGlobalUserVar[cmd;$get[u]];,]\`

<:bcccccc:924712076306432131> **Networth:** \`$numberSeparator[$truncate[$sum[$getGlobalUserVar[cash;$get[u]];$getGlobalUserVar[bank;$get[u]]]];,]\`$getServerVar[symbol]

<:isbothuh:924712688423145512> **Bot: $replaceText[$replaceText[$isBot[$get[u]];true;Yeah they are a bot];false;Nope they are not a bot]**

**<a:xpmultiplier:924667963913687062> Level: [$getGlobalUserVar[level;$get[u]]]($getVar[support])**]

$let[u;$findUser[$message;yes]]`}