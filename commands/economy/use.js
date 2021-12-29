module.exports = [{
name: "use",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message[1];no cooldown;cd;nocd;cooldown]]==true]
$title[1;<a:nocd:924666885713301505> **Cooldown reseted**]
$color[1;ed6a03]
$description[1;**You used your <a:nocd:924666885713301505> and now all of your command cooldowns  (except: daily , weekly , hourly) have been reset**]
$setGlobalUserVar[cooldown;1s]
$setGlobalUserVar[nocd;$sub[$getGlobalUserVar[nocd];1]]
$onlyIf[$getGlobalUserVar[nocd]>=1;**You sadly do not own any <a:nocd:924666885713301505>**]
$else
$if[$toLowerCase[$checkContains[$message[1];premium;prem;premi;premiumpackage]]==true]
$title[1;<:legendary:916711006519054336> **$servername has premium now**]
$color[1;d6b841]
$description[1;**You used your <:legendary:916711006519054336> and now $servername has 1w premium**]

$settimeout[sp;7d;{
"serverid": "$guildid"}]

$setServerVar[pp;on]
$setGlobalUserVar[premium;$sub[$getGlobalUserVar[premium];1]]
$onlyIf[$getServerVar[pp]==off;**This server already has premium**]
$onlyIf[$getGlobalUserVar[premium]>=1;**You dont own any <:legendary:916711006519054336>**]
$else
$if[$toLowerCase[$checkContains[$message[1];2x multiplier;multiplier;2xmultiplier;multi]]==true]
$title[1;<a:xpmultiplier:924667963913687062> **money multiplied 2x**]
$color[1;c7f8ff]
$description[1;**You used your <a:xpmultiplier:924667963913687062> and your money multiplier by 2x and now you have $truncate[$getGlobalUserVar[cash]]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[2;$getGlobalUserVar[cash]]]]
$setGlobalUserVar[multiplier;$sub[$getGlobalUserVar[multiplier];1]]
$onlyIf[$getGlobalUserVar[multiplier]>=1;**You dont own any <a:xpmultiplier:924667963913687062>**]
$globalCooldown[3d;**This command is very OP so please wait %time%**]
$else
**That item is not useable**
$endif
$endif
$endif
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]`
}, {
type: "timeout",
name: "sp",
code: `
$setServerVar[pp;off;$timeoutData[serverid]]`}]

