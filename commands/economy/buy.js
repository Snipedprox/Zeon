module.exports = {
name: "buy",
$if: "v4",
code: `
$if[$message[1]==1]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:pcs:924437302640529478> hacking pc and paid 15,000$getServerVar[symbol]**]
$setGlobalUserVar[pc;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$onlyIf[$getGlobalUserVar[cash]>=15000;**You need to have atleast 15,000$getServerVar[symbol]**]
$onlyIf[$getGlobalUserVar[pc]==0;**You have already bought a laptop**]

$else

$if[$mesage[1]==2]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <a:barcode:924439138332201042> killer virus and paid 5,000$getServerVar[symbol]**]
$setGlobalUserVar[malware;kill]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$onlyIf[$getGlobalUserVar[cash]>=5000;**You need to have atleast 5,000$getServerVar[symbol]**]

$else

$if[$message[1]==3]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:vcode:924439939523952721> vanishing virus and paid 25,000$getServerVar[symbol]**]
$setGlobalUserVar[malware;vanish]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];25000]]
$onlyIf[$getGlobalUserVar[cash]>=25000;**You need to have atleast 25,000$getServerVar[symbol]**]

$else

$if[$message[1]==4]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:legendary:916711006519054336> and paid $numberSeparator[$multi[$message[2];50000];,]$getServerVar[symbol]**]

$setGlobalUserVar[premium;$sum[$getGlobalUserVar[premium];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];50000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];50000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$message[1]==5]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <a:nocd:924666885713301505> and paid $numberSeparator[$multi[$message[2];25000];,]$getServerVar[symbol]**]

$setGlobalUserVar[nocd;$sum[$getGlobalUserVar[nocd];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$message[1]==6]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <a:xpmultiplier:924667963913687062> and paid $numberSeparator[$multi[$message[2];50000];,]$getServerVar[symbol]**]

$setGlobalUserVar[multiplier;$sum[$getGlobalUserVar[multiplier];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];50000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];50000];**You dont have enough $getServerVar[symbol]**]
$else

$if[$message[1]==7]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:padlocks:926269075318005850> and paid $numberSeparator[$multi[$message[2];10000];,]$getServerVar[symbol]**]

$setGlobalUserVar[padlock;$sum[$getGlobalUserVar[padlock];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];10000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];10000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$message[1]==9]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:robberymask:926270247651115048> and paid $numberSeparator[$multi[$message[2];25000];,]$getServerVar[symbol]**]

$setGlobalUserVar[robbery;$sum[$getGlobalUserVar[robbery];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];**You dont have enough $getServerVar[symbol]**]


$else

$if[$message[1]==8]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:creditcard:926274742770626602> and paid $numberSeparator[$multi[$message[2];15000];,]$getServerVar[symbol]**]

$setGlobalUserVar[credit;$sum[$getGlobalUserVar[credit];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];15000];**You dont have enough $getServerVar[symbol]**]



$else


$if[$message[1]==10]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:goldpickaxe:926548373358641193> golden pickaxe and paid 15,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;gold]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$onlyIf[$getGlobalUserVar[cash]>=15000;**You need to have atleast 15,000$getServerVar[symbol]**]

$else

$if[$message[1]==11]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:candypickaxe:926548448650621008> candy pickaxe and paid 50,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;candy]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];50000]]
$onlyIf[$getGlobalUserVar[cash]>=50000;**You need to have atleast 50,000$getServerVar[symbol]**]

$else

$if[$message[1]==12]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:amethystpickaxe:926548560714010694> amethyst pickaxe and paid 250,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;amethyst]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250000]]
$onlyIf[$getGlobalUserVar[cash]>=250000;**You need to have atleast 250,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];13]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:spectre:926548638065389668> spectre pickaxe and paid 1,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;spectre]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000000]]
$onlyIf[$getGlobalUserVar[cash]>=1000000;**You need to have atleast 1,000,000$getServerVar[symbol]**]

$else

$if[$message[1]==14]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:legendarypickaxe:926548756147617812> legendary pickaxe and paid 2,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;legendary]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2000000]]
$onlyIf[$getGlobalUserVar[cash]>=2000000;**You need to have atleast 2,000,000$getServerVar[symbol]**]

$else

$if[$message[1]==15]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:devclaw:926548826150567998> claw and paid 5,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;claw]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000000]]
$onlyIf[$getGlobalUserVar[cash]>=5000000;**You need to have atleast 5,000,000$getServerVar[symbol]**]

$else


$if[$message[1]==16]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:cross:926955351952220180> and paid $numberSeparator[$multi[$message[2];500000];,]$getServerVar[symbol]**]

$setGlobalUserVar[cross;$sum[$getGlobalUserVar[cross];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];500000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];500000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$message[1]==17]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:grass:926956974061543455> and paid $numberSeparator[$multi[$message[2];5000];,]$getServerVar[symbol]**]

$setGlobalUserVar[grass;$sum[$getGlobalUserVar[grass];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];5000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];5000];**You dont have enough $getServerVar[symbol]**]


$else

$if[$message[1]==18]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:moneybottle:926954176125231104> and paid $numberSeparator[$multi[$message[2];200000];,]$getServerVar[symbol]**]

$setGlobalUserVar[bottle;$sum[$getGlobalUserVar[bottle];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];200000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];200000];**You dont have enough $getServerVar[symbol]**]



$else

$if[$message[1]==19]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:platinumwatch:926954905858637864> and paid $numberSeparator[$multi[$message[2];25000];,]$getServerVar[symbol]**]

$setGlobalUserVar[watch;$sum[$getGlobalUserVar[watch];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];**You dont have enough $getServerVar[symbol]**]



$else

$if[$message[1]==20]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:rainbowcurser:926956138631663658> and paid $numberSeparator[$multi[$message[2];1000000];,]$getServerVar[symbol]**]

$setGlobalUserVar[cursor;$sum[$getGlobalUserVar[cursor];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];1000000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];1000000];**You dont have enough $getServerVar[symbol]**]



$else

$if[$message[1]==21]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:seeds:926956863747153961> and paid $numberSeparator[$multi[$message[2];3000];,]$getServerVar[symbol]**]

$setGlobalUserVar[seeds;$sum[$getGlobalUserVar[seeds];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];3000]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];3000];**You dont have enough $getServerVar[symbol]**]

$else

$if[$message[1]==22]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought $numberSeparator[$message[2];,] <:balloons:926955931701477426>  and paid $numberSeparator[$multi[$message[2];100];,]$getServerVar[symbol]**]

$setGlobalUserVar[bloons;$sum[$getGlobalUserVar[bloons];$multi[$message[2];1]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];100]]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];100];**You dont have enough $getServerVar[symbol]**]

$else

**You need to specify a valid amount**
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$isNumber[$message[2]]==true;**I only accept numbers sorry**]
$onlyIf[$message[2]>=1;**You cant buy air smh specify something**]
$onlyIf[$toLowerCase[$checkContains[$message[2];-;~;$;+;=;-;_;,;.;/]]==false;**I dont think you wana have errors so specify a valid number without symbols**]`}







