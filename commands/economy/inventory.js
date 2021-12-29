module.exports = {
name: "inv",
aliases: "inventory",
code: `
$title[1;**$userTag[$get[u]]'s inventory**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;
\`\`\`
If a user is misusing the economy or if you or a user have a negative balance please contact my owner by sending her a friend request her discord tag is $usertag[852908598664364082]\`\`\`


<:pcs:924437302640529478> **[Hacker pc]($getVar[support])**
**Amount:** \`$numberSeparator[$getGlobalUserVar[pc;$get[u]];,]\`

$replaceText[$replaceText[$replaceText[$getGlobalUserVar[malware;$get[u]];kill;<a:barcode:924439138332201042>];basic;<:normal:922088804041523250>];vanish;<:vcode:924439939523952721>] **[Malware]($getVar[support])**
**Type:** \`$getGlobalUserVar[malware;$get[u]]\`

<:legendary:916711006519054336> **[Premium packaxe]($getVar[support])**
**Amount:** \`$numberSeparator[$getGlobalUserVar[premium;$get[u]];,]\`

<a:nocd:924666885713301505> **[No cooldown]($getVar[support])**
**Amount:** \`$numberSeparator[$getGlobalUserVar[nocd;$get[u]];,]\`

<a:xpmultiplier:924667963913687062> **[2x multplier]($getVar[support])**
**Amount:** \`$numberSeparator[$getGlobalUserVar[multiplier;$get[u]];,]\`]
$let[u;$findUser[$message;yes]]`}