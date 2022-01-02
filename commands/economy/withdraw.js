module.exports = ({
name:"with",
aliases:"withdraw",
category:"Economy",
bot:"Embed Links",
user:"None",
usage:"with <amount>",
example:"with 1000",
explain:"Withdraw 1000 from your bank!",
code:`
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$color[1;$getVar[color]]
$description[1;**You withdrew $numberSeparator[$truncate[$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot withraw 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot withdraw negative amounts!}{color:FF0000}}]
$onlyif[$getGlobalUserVar[bank]>=$get[amount];{newEmbed:{description:You do not have that much to withdraw!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[bank;$authorID];1];max;$getGlobalUserVar[bank;$authorID];1]]

$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`})