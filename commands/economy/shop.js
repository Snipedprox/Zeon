module.exports = {
name: "shop",
$if: "v4",
code: `
$if[$message==]
$footer[1;Page 1 / 3]
$title[1;**Welcome to the store!**]
$color[1;$getVar[color]]
$description[1;
**Purchase one of these items to either use it to your advantage or for the server for example premium making everyone enjoy it for 7d but how do you buy an item heres how**
\`\`\`
- $getServerVar[prefix]buy < number > < amount>\`\`\`

══════════════════
\`1\` <:pcs:924437302640529478> \`Laptop---------- 15K\`$getServerVar[symbol]
\`2\` <a:barcode:924439138332201042> \`Killer code---------- 5K\`$getServerVar[symbol]
\`3\` <:vcode:924439939523952721> \`Vanish code---------- 25K\`$getServerVar[symbol]
\`4\` <:legendary:916711006519054336> \`Premium---------- 50K\`$getServerVar[symbol]
\`5\` <a:xpmultiplier:924667963913687062> \`Multiplier---------- 25K\`$getServerVar[symbol]
\`6\` <a:nocd:924666885713301505> \`No cooldown---------- 50K\`$getServerVar[symbol]
\`7\` <:padlocks:926269075318005850> \`Padlock---------- 10K\`$getServerVar[symbol]
\`8\` <:creditcard:926274742770626602> \`Credit card---------- 15K\`$getServerVar[symbol]
\`9\` <:robberymask:926270247651115048> \`Mask-----------25K\`$getServerVar[symbol]]

$else

$if[$toLowerCase[$checkContains[$message;one;1]]==true]
$footer[1;Page 1 / 3]
$title[1;**Welcome to the store!**]
$color[1;$getVar[color]]
$description[1;
**Purchase one of these items to either use it to your advantage or for the server for example premium making everyone enjoy it for 7d but how do you buy an item heres how**
\`\`\`
- $getServerVar[prefix]buy < number > < amount>\`\`\`

══════════════════
\`1\` <:pcs:924437302640529478> \`Laptop---------- 15K\`$getServerVar[symbol]
\`2\` <a:barcode:924439138332201042> \`Killer code---------- 5K\`$getServerVar[symbol]
\`3\` <:vcode:924439939523952721> \`Vanish code---------- 25K\`$getServerVar[symbol]
\`4\` <:legendary:916711006519054336> \`Premium---------- 50K\`$getServerVar[symbol]
\`5\` <a:xpmultiplier:924667963913687062> \`Multiplier---------- 25K\`$getServerVar[symbol]
\`6\` <a:nocd:924666885713301505> \`No cooldown---------- 50K\`$getServerVar[symbol]
\`7\` <:padlocks:926269075318005850> \`Padlock---------- 10K\`$getServerVar[symbol]
\`8\` <:creditcard:926274742770626602> \`Credit card---------- 15K\`$getServerVar[symbol]
\`9\` <:robberymask:926270247651115048> \`Mask-----------25K\`$getServerVar[symbol]]

$else

$if[$toLowerCase[$checkContains[$message;two;2;dos]]==true]
$footer[1;Page 2 / 3]
$title[1;**Welcome to the pickaxe shop!**]
$color[1;$getVar[color]]
$description[1;
**All of these pickaxes are diffrent they give more ores, the better the pickaxe the better and greater the ore how do you get them heres how**
\`\`\`
- $getServerVar[prefix]buy < number >\`\`\`

══════════════════
\`10\` <:goldpickaxe:926548373358641193> \`Golden pickaxe------- 15K\`$getServerVar[symbol]
\`11\` <:candypickaxe:926548448650621008> \`Candy pickaxe--------- 50K\`$getServerVar[symbol]
\`12\` <:amethystpickaxe:926548560714010694> \`Amethyst pickaxe---- 250K\`$getServerVar[symbol]
\`13\` <:spectre:926548638065389668> \`Spectre pickaxe-------- 1M\`$getServerVar[symbol]
\`14\` <:legendarypickaxe:926548756147617812> \`Legendary pickaxe----- 2M\`$getServerVar[symbol]
\`15\` <:devclaw:926548826150567998> \`Claws---------- 5M\`$getServerVar[symbol]]

$else

$if[$toLowerCase[$checkContains[$message;three;3;thris]]==true]
$footer[1;Page 3 / 3]
$title[1;**Welcome to the blackmarket!**]
$thumbnail[1;https://images-ext-2.discordapp.net/external/XFyLJtw6Yj6_KqSWTDcQSvzmi7_xnznof46vzmR9QJU/%3Frik%3DQbuCdkYJm1dlwg%26riu%3Dhttp%253a%252f%252fcdn.onlinewebfonts.com%252fsvg%252fimg_60925.png%26ehk%3DqEadg5YfNNBshBABWKQIr75QwcvJn7SldskAXFdHDfo%253d%26risl%3D%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.6dbb937bb327372721cbac6c6365d1ec?width=480&height=420]
$color[1;$getVar[color]]
$description[1;
**Stuff may seem cheap but they are very much illegal some are cheap and some are crazy expensive so beware**
\`\`\`
- $getServerVar[prefix]buy < number >\`\`\`

══════════════════
\`16\` <:cross:926955351952220180> \`Cross------- 500K\`$getServerVar[symbol]
\`17\` <:grass:926956974061543455> \`Grass--------- 5K\`$getServerVar[symbol]
\`18\` <:moneybottle:926954176125231104> \`Money bottle-- 200K\`$getServerVar[symbol]
\`19\` <:platinumwatch:926954905858637864> \`Platinum watch- 25K\`$getServerVar[symbol]
\`20\` <:rainbowcurser:926956138631663658> \`Rainbow cursor-- 1M\`$getServerVar[symbol]
\`21\` <:seeds:926956863747153961> \`Seeds---------- 3K\`$getServerVar[symbol]
\`22\` <:balloons:926955931701477426> \`Balloons------- 100\`$getServerVar[symbol]]

$endif
$endif
$endif
$endif`}




