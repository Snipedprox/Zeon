module.exports = {
name: "shop",
$if: "v4",
code: `
$title[1;<:sdtaa:924435792514928651> **Shop list**]
$thumbnail[1;$useravatar[$clientid]]
$color[1;$getVar[color]]
$description[1;
**" To buy an item you simply do \`$getServerVar[prefix]buy < item > < amount >\` not that hard smh"** 

<:pcs:924437302640529478> **[Hacking pc]($getVar[support])**
**ID:** \`laptop\`
**Cost:** \`15,000\`$getServerVar[symbol]
**Desciption: With this you can hack and earn more of that money**

<a:barcode:924439138332201042> **[Killer malware]($getVar[support])**
**ID:** \`kill\`
**Cost:** \`5,000\`$getServerVar[symbol]
**Desciption: Kind of dangerous virus**

<:vcode:924439939523952721> **[Vanish malware]($getVar[support])**
**ID:** \`vanish\`
**Cost:** \`25,000\`$getServerVar[symbol]
**Desciption:  Very dangerous virus**

\`\`\`
🜲 Premium packages 🜲\`\`\`

<:legendary:916711006519054336> **[Premium packaxe]($getVar[support])**
**ID:** \`premium\`
**Cost:** \`50,000\`$getServerVar[symbol]
**Description: a premium packaxe gives premium points and you can use premium points in a server to give that server 1w premium**

<a:nocd:924666885713301505> **[No cooldown]($getVar[support])**
**ID:** \`cooldown\`
**Cost:** \`25,000\`$getServerVar[symbol]
**Description: Hate cooldowns? me too remove every command cooldown**

<a:xpmultiplier:924667963913687062> **[2x multiplier]($getVar[support])**
**ID:** \`multplier\`
**Cost:** \`50,000\`$getServerVar[symbol]
**Description: wanna increase your money well multiply 2x of your money**]

$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]`}












