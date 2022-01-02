module.exports = ({
name:"gift",
$if: "v4",
code:`
$color[1;$getVar[color]]
$description[1;**$username you gave $numberSeparator[$truncate[$multi[1;$message[2]]];,] $get[$toLowerCase[$get[item]]i] to $username[$get[u]]**]
$setGlobalUserVar[$toLowerCase[$get[item]];$sum[$getGlobalUserVar[$toLowerCase[$get[item]];$get[u]];$truncate[$multi[1;$message[2]]]];$get[u]]
$setGlobalUserVar[pc;$sub[$getGlobalUserVar[pc];$truncate[$multi[1;$message[2]]]]]
$onlyIf[$get[u]!=$authorid;**Try running the comand like this** \`$getServerVar[prefix]gift < item id > < amount > @user\`]
$onlyIf[$isNumber[$message[2]]==true;**I dont think thats a number**]
$onlyIf[$message[2]>=1;**Specify a valid amount to gift in your second argument**]
$onlyIf[$getGlobalUserVar[$toLowerCase[$get[item]]]>=$truncate[$multi[1;$message[2]]];**Mhm does not seem that u have enough $get[$toLowerCase[$get[item]]i]**]
$onlyIf[$checkContains[$message[2];-;.;,;_;+;infinity;#CHAR#;^;@;!;~]==false;**Sorry to break it to you but we dont allow symbols**]


$let[item;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;pc];4;premium];5;multiplier];6;nocd];7;padlock];8;credit];9;robbery];16;cross];17;grass];18;bottle];19;watch];20;cursor];21;seeds];22;bloons];quartz;quartz];amethyst];amethyst];obsidian;obsidian];ember;ember];emerald;emerald];crystal;crystal];fish;fish];salmon;salmon];clown;clown];blue;blue];squid;squid];dolphin;dolphin];space;space];shark;shark];crab;crab]]

$let[itemi; ]`})