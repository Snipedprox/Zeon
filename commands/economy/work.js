module.exports = {
name: "work",
$if: "v4",
code: `
$if[$getGlobalUserVar[job]==white]
$title[1;**Oh your a good guy**]
$color[1;$getVar[color]]
$description[1;**You worked as a white hat hacker and $randomText[fixed some computer exploits;caught a bad hacker and turn em in;helped a noob hacker become pro] and you got** \`2,000\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]

$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$else

$if[$getGlobalUserVar[job]==black]
$title[1;**Oh your a bad guy**]
$color[1;$getVar[color]]
$description[1;**You worked as a black hat hacker and $randomText[hacked into nasa;exposed microsofts exploits;made a jailbreak application;hacked into someones head;hacked intoanother black hat hacker] and you got** \`10,000\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];10000]]

$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$else

$if[$getGlobalUserVar[job]==grey]
$title[1;**Oh your good and bad guy?**]
$color[1;$getVar[color]]
$description[1;**You worked as a grey hat hacker and $randomText[stole a white hat hackers code to make a money generator for the poor people and for yourself;stole money from a corrupt bank;stole a discord account and gave it away to someone who deserved it;helped anonymous but betrayed them] and you got** \`15,000\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];15000]]

$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$else
**Go get a job thats all im saying**
$endif
$endif
$endif

$globalCooldown[30m;{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`}



