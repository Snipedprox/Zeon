module.exports = {
name: "pc",
$if: "v4",
code: `
$if[$message[1]==stats]
$title[1;**Laptop stats**]
$thumbnail[1;https://media.discordapp.net/attachments/924652835692511294/924656247427436545/jbkhjhh.png]
$color[1;$getVar[color]]
$description[1;
**Your pc's stats **
**Name:** <:pcs:924437302640529478> **Hacker pc**
**Durability: [$repeatMessage[$getGlobalUserVar[pcd];$replaceText[$getGlobalUserVar[pcd];$getGlobalUserVar[pcd];■]]]($getVar[support])**]
$else
$if[$message[1]==fix]
$title[1;<:sdtaa:924435792514928651> **Pc fixed**]
$color[1;$getVar[color]]
$description[1;<:sdtaa:924435792514928651> **You went to go fix your pc which costed you 2,000$getServerVar[symbol]**]
$setGlobalUserVar[pcd;10]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2000]]


$onlyIf[$getGlobalUserVar[pcd]=<2;<:sdtaa:924435792514928651> **You need 2 or less durability bars for this action**]
$onlyIf[$getGlobalUserVar[pc]>=1;**You need to own a pc**]
$onlyIf[$getGlobalUserVar[cash]>=2000;**You need 2,000$getServerVar[symbol] or more for this action**]
$else
$if[$message[1]==]
$title[1;**<:statss:924456918515351612> Pc commands**]
$color[1;$getVar[color]]
$description[1;
════════════════

**Subcommands**
**\`\`\`php
stats , fix\`\`\`**]
$endif
$endif
$endif`
}