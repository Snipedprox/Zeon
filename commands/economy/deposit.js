module.exports = ({
name:"dep",
aliases:"deposit",
category:"Economy",
explanation:"Deposit cash into your bank!",
bot:"Embed Links",
user:"None",
usage:"dep <amount>",
example:"dep 1000",
explain:"Deposit 1000 into your bank!",
code:`
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$color[1;$getVar[color]]
$description[1;**You deposited $numberSeparator[$truncate[$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$get[amount]]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$get[amount]]]
$onlyif[$sum[$getglobaluservar[bank];$get[amount]]<=$getGlobalUservar[bankspace];{newEmbed:{description:**You have reached max bank capacity try to deposit a lower amount** (\`$getGlobalUserVar[bankspace]\`$getVar[symbol])}{color:FF0000}}] 
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot dep 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot dep negative amounts!}{color:FF0000}}]
$onlyif[$getGlobalUserVar[cash]>=$get[amount];{newEmbed:{description:You do not have that much to dep!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[cash;$authorID];1];max;$getGlobalUserVar[cash;$authorID];1]]

$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`})