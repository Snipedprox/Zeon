module.exports = {
name: "open",
$if: "v4",
code: `
$if[$message[1]==$toLowerCase[common]]
$title[1;**Common crate opened**]
$color[1;$getVar[color]]
$description[1;
**You opend $numberSeparator[$multi[1;$get[amount]];,] <:commonbox:925836835501010944> and got $numberSeparator[$multi[$random[196;500];$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[common;$sub[$getGlobalUserVar[common];$multi[$get[amount];1]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[196;500];$get[amount]]]]
$onlyIf[$getGlobalUserVar[common]>=$multi[$get[amount];1];**You sadly do not have $numberSeparator[$multi[1;$get[amount]];,] <:commonbox:925836835501010944>**]
$onlyIf[$toLowerCase[$checkContains[$get[amount];-;+;.;,;/;~]]==false;**Dont use symbols plz**]

$onlyif[$isnumber[$get[amount]]==true;**Not a valid number**]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[2]];k;000;1];m;000000;1];all;$getGlobalUserVar[common;$authorID];1];max;$getGlobalUserVar[common;$authorID];1]]

$else

$if[$message[1]==$toLowerCase[basic]]
$title[1;**Basic crate opened**]
$color[1;$getVar[color]]
$description[1;
**You opend $numberSeparator[$multi[1;$get[amount]];,] <:basic:925851430659686411> and got $numberSeparator[$multi[$random[10;50];$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[basic;$sub[$getGlobalUserVar[basic];$multi[$get[amount];10]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[10;50];$get[amount]]]]
$onlyIf[$getGlobalUserVar[basic]>=$multi[$get[amount];1];**You sadly do not have $numberSeparator[$multi[1;$get[amount]];,] <:basic:925851430659686411>**]
$onlyIf[$toLowerCase[$checkContains[$get[amount];-;+;.;,;/;~]]==false;**Dont use symbols plz**]

$onlyif[$isnumber[$get[amount]]==true;**Not a valid number**]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[2]];k;000;1];m;000000;1];all;$getGlobalUserVar[basic;$authorID];1];max;$getGlobalUserVar[basic;$authorID];1]]



$else
$if[$message[1]==$toLowerCase[uncommon]]
$title[1;**unommon crate opened**]
$color[1;$getVar[color]]
$description[1;
**You opend $numberSeparator[$multi[1;$get[amount]];,] <:uncommonbx:925837497743843409> and got $numberSeparator[$multi[$random[563;750];$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[uncommon;$sub[$getGlobalUserVar[uncommon];$multi[$get[amount];1]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[563;750];$get[amount]]]]
$onlyIf[$getGlobalUserVar[uncommon]>=$multi[$get[amount];1];**You sadly do not have $numberSeparator[$multi[1;$get[amount]];,] <:uncommonbx:925837497743843409>**]
$onlyIf[$toLowerCase[$checkContains[$get[amount];-;+;.;,;/;~]]==false;**Dont use symbols plz**]

$onlyif[$isnumber[$get[amount]]==true;**Not a valid number**]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[2]];k;000;1];m;000000;1];all;$getGlobalUserVar[uncommon;$authorID];1];max;$getGlobalUserVar[uncommon;$authorID];1]]


$else

$if[$toLowerCase[$checkContains[$message[1];rare;hacker;hecker;haker;heker]]==true]
$title[1;**hacker crate opened**]
$color[1;$getVar[color]]
$description[1;
**You opend $numberSeparator[$multi[1;$get[amount]];,] <:hackerchest:925107840862007306> and got $numberSeparator[$multi[$random[1712;13919];$get[amount]];,]$getServerVar[symbol]**]
$setGlobalUserVar[hacker;$sub[$getGlobalUserVar[hacker];$multi[$get[amount];1]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[1712;13919];$get[amount]]]]
$onlyIf[$getGlobalUserVar[hacker]>=$multi[$get[amount];1];**You sadly do not have $numberSeparator[$multi[1;$get[amount]];,] <:hackerchest:925107840862007306>**]
$onlyIf[$toLowerCase[$checkContains[$get[amount];-;+;.;,;/;~]]==false;**Dont use symbols plz**]

$onlyif[$isnumber[$get[amount]]==true;**Not a valid number**]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[2]];k;000;1];m;000000;1];all;$getGlobalUserVar[hacker;$authorID];1];max;$getGlobalUserVar[hacker;$authorID];1]]
$else
$title[1;**Error**]
$color[1;$getVar[color]]
$description[1;**You didnt specify any chest heres a complete list of chest**
\`\`\`
common
uncommon
basic
rare / hacker / hecker / haker / heker\`\`\`
$endif
$endif
$endif
$endif`}
