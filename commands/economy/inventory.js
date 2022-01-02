module.exports = {
name: "inv",
$if: "v4",
aliases: ['inven','inventory','ivn'],
code: `
$if[$toLowerCase[$checkContains[$message[2];1; ]]==true]
$title[1;**$usertag[$get[u]]'s inventory**]
$color[1;45679]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;

<:commonbox:925836835501010944> **Common box**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[common;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]open common\`

<:uncommonbx:925837497743843409> **Uncommon box**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[uncommon;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]open uncommon\`

<:basic:925851430659686411> **Basic**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[basic;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]open basic\`

<:hackerchest:925107840862007306> **Hacker box**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[hacker;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]open hacker\`

<:pcs:924437302640529478> **Hacking pc**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[pc;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]hack\`

$replaceText[$replaceText[$replaceText[$getGlobalUserVar[malware;$get[u]];kill;<a:barcode:924439138332201042>];basic;<:normal:922088804041523250>];vanish;<:vcode:924439939523952721>] **Malware**
**Amount:** \`1\`
**Unlocks:** \`$getServerVar[prefix]hack\`]


$let[u;$findUser[$message[1];yes]]
$else

$if[$toLowerCase[$checkContains[$message[2];2;two]]==true]
$title[1;**$usertag[$get[u]]'s inventory**]
$color[1;45679]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;

<:robberymask:926270247651115048> **Robbery mask**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[robbery;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use mask\`

<:creditcard:926274742770626602> **Credit card**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[credit;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use credit\`

<:padlocks:926269075318005850> **Padlocks**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[padlock;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use padlock\`

<:legendary:916711006519054336> **Premium box**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[premium;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use premium\`

<a:nocd:924666885713301505> **No cooldown**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[nocd;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use cooldown\`

<a:xpmultiplier:924667963913687062> **Multiplier**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[multiplier;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]use multiplier\`]
$let[u;$findUser[$message[1];yes]]

$else

$if[$toLowerCase[$checkContains[$message[2];3;three]]==true]
$title[1;**$usertag[$get[u]]'s inventory**]
$color[1;45679]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;

<:cross:926955351952220180> **Cross**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[cross;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]pray\`

<:grass:926956974061543455> **Grass**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[grass;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]plant\`

<:moneybottle:926954176125231104> **Money bottle**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[bottle;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]cthrow\`

<:platinumwatch:926954905858637864> **Platinum watch**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[watch;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]premium\`

<:rainbowcurser:926956138631663658> **Rainbow cursor**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[cursor;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]flex\`

<:seeds:926956863747153961> **Seeds**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[seeds;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]plant\`

<:balloons:926955931701477426> **Balloons**
**Amount:** \`$truncate[$numberSeparator[$getGlobalUserVar[bloons;$get[u]]];,]\`
**Unlocks:** \`$getServerVar[prefix]celebrate\`]

$let[u;$findUser[$message[1];yes]]
$else

:x:**try this formate \`$getServerVar[prefix]inventory @user < page 1 / 2 / 3 >\`**
$endif
$endif
$endif`}