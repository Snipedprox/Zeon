module.exports = {
name: "buy",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message[1];pc;laptop;lp;lap;hacking-laptop;hacking laptop]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:pcs:924437302640529478> hacking pc and paid 15,000$getServerVar[symbol]**]
$setGlobalUserVar[pc;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$onlyIf[$getGlobalUserVar[cash]>=15000;**You need to have atleast 15,000$getServerVar[symbol]**]
$onlyIf[$getGlobalUserVar[pc]==0;**You have already bought a laptop**]

$else

$if[$toLowerCase[$checkContains[$message[1];kill;killer;kills;killed]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <a:barcode:924439138332201042> killer virus and paid 5,000$getServerVar[symbol]**]
$setGlobalUserVar[malware;kill]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$onlyIf[$getGlobalUserVar[cash]>=5000;**You need to have atleast 5,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];vanish;van;evade;gone]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:vcode:924439939523952721> vanishing virus and paid 25,000$getServerVar[symbol]**]
$setGlobalUserVar[malware;vanish]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];25000]]
$onlyIf[$getGlobalUserVar[cash]>=25000;**You need to have atleast 25,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];premium;prem;premi;premiumpackage]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:legendary:916711006519054336> and paid $numberSeparator[$multi[$message[2];50000];,]$getServerVar[symbol]**]

$setGlobalUserVar[premium;$sum[$getGlobalUserVar[premium];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];50000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];50000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];nocooldown;cd;nocd;cooldown]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <a:nocd:924666885713301505> and paid $numberSeparator[$multi[$message[2];25000];,]$getServerVar[symbol]**]

$setGlobalUserVar[nocd;$sum[$getGlobalUserVar[nocd];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];2x multiplier;multiplier;2xmultiplier;multi]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <a:xpmultiplier:924667963913687062> and paid $numberSeparator[$multi[$message[2];50000];,]$getServerVar[symbol]**]

$setGlobalUserVar[multiplier;$sum[$getGlobalUserVar[multiplier];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];50000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];50000];**You dont have enough $getServerVar[symbol]**]
$else
**You need to specify a valid amount**
$endif
$endif
$endif
$endif
$endif
$endif

$onlyIf[$isNumber[$message[2]]==true;**I only accept numbers sorry**]
$onlyIf[$message[2]>=1;**You cant buy air smh specify something**]
$onlyIf[$toLowerCase[$checkContains[$message[2];-;~;$;+;=;-;_;,;.;/]]==false;**I dont think you wana have errors so specify a valid number without symbols**]`}







