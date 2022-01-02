module.exports = {
name: "hack",
$if: "v4",
code: `
$if[$getGlobalUserVar[malware]==basic]
$title[1;**Basic virus huh**]
$color[1;$getVar[color]]
$description[1;**You unleashed your basic virus into the dark web which did minor damage to people and your pc and got $random[1;500]$getVar[symbol]**
**You now have $getGlobalUserVar[pcd] pc durability**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;500]]]
$setGlobalUserVar[pcd;$sub[$getGlobalUserVar[pcd];1]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$else 
$if[$getGlobalUserVar[malware]==kill]
$setGlobalUserVar[pcd;$sub[$getGlobalUserVar[pcd];2]]
$title[1;**Killer virus huh**]
$color[1;$getVar[color]]
$description[1;**You unleashed your killer virus into the dark web which did some Medium damage to people and your pc and got $random[500;1000]$getVar[symbol]**
**You now have $getGlobalUserVar[pcd] pc durability**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[500;1000]]]
$setGlobalUserVar[pcd;$sub[$getGlobalUserVar[pcd];2]]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$else

$if[$getGlobalUserVar[malware]==vanish]
$title[1;**Vanish virus huh**]
$color[1;$getVar[color]]
$description[1;**You unleashed your vanish virus into the dark web which did some Destructive damage to people and your pc and got $random[1000;10000]$getVar[symbol]**
**You also broke your pc durability**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;10000]]]
$setGlobalUserVar[pcd;0]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[pcd]>=3;**You need a 3 or more durabiility bars for this acion...**]
$onlyIf[$getGlobalUserVar[pc]>=1;**You need a laptop for this action...**]
$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`
}