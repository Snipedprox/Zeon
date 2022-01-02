module.exports = [{
name: "use",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message[1];lock;padlock;pads;pad]]==true]
$title[1;<:padlocks:926269075318005850> **Wallet locked**]
$color[1;ed6a03]
$description[1;**You have used your <:padlocks:926269075318005850> padlock now your wallet is locked**]
$setGlobalUserVar[pad;1]
$setGlobalUserVar[padlock;$sub[$getGlobalUserVar[padlock];1]]
$onlyIf[$getGlobalUserVar[padlock]==0;**you already enabled your <:padlocks:926269075318005850>**]
$onlyIf[$getGlobalUserVar[padlock]>=1;**You sadly do not own any <:padlocks:926269075318005850>**]
$else
$if[$toLowerCase[$checkContains[$message[1];no cooldown;cd;nocd;cooldown]]==true]
$title[1;<a:nocd:924666885713301505> **Cooldown reseted**]
$color[1;ed6a03]
$description[1;**You used your <a:nocd:924666885713301505> and now all of your command cooldowns  (except: daily , weekly , hourly) have been reset**]
$setGlobalUserVar[cooldown;1s]
$setGlobalUserVar[bcooldown;1s]
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

$if[$toLowerCase[$checkContains[$message[1];ccard;credit;creditcard;creditcards]]==true]
$title[1;<:creditcard:926274742770626602> **$servername has premium now**]
$color[1;d6b841]
$description[1;**You used your <:creditcard:926274742770626602> and now $servername has 3d premium**]

$settimeout[spp;3d;{
"serverid": "$guildid"}]

$setServerVar[pp;on]
$setGlobalUserVar[credit;$sub[$getGlobalUserVar[credit];1]]
$onlyIf[$getServerVar[pp]==off;**This server already has premium**]
$onlyIf[$getGlobalUserVar[credit]>=1;**You dont own any <:creditcard:926274742770626602>**]
$else

$if[$toLowerCase[$checkContains[$message[1];mask;robbery;rob;robbers]]==true]
$title[1;**<:robberymask:926270247651115048> mask enabled**]
$color[1;d6b841]
$description[1;**You put on your <:robberymask:926270247651115048> now you will have success in every rob attempt for 1h**]

$settimeout[id;1h;{
"id": "$authorid"}]

$setGlobalUserVar[mask;on]
$setGlobalUserVar[robbery;$sub[$getGlobalUserVar[robbery];1]]
$onlyIf[$getServerVar[mask]==off;**You already have used your <:robberymask:926270247651115048>**]
$onlyIf[$getGlobalUserVar[robbery]>=1;**You dont own any <:robberymask:926270247651115048>**]
$else
**That item is not useable**
$endif
$endif
$endif
$endif
$endif
$endif
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]`
}, {
type: "timeout",
name: "sp",
code: `
$setServerVar[pp;off;$timeoutData[serverid]]`
}, {
type: "timeout",
name: "spp",
code: `
$setServerVar[pp;off;$timeoutData[serverid]]`
}, {
type: "timeout",
name: "mask",
code: `
$setGlobalUserVar[mask;off;$timeoutData[id]]`}]

