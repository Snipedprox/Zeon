module.exports = [{
name: "farm",
$if: "v4",
code: `
$title[1;**Seeds planted**]
$color[1;DDFFAA]
$description[1;**You just planted $numberSeparator[$multi[1;$message];,] <:seeds:926956863747153961> and that took up $numberSeparator[$multi[$message;1];,] <:grass:926956974061543455>**]

$setGlobalUserVar[farmamount;$multi[$message;$random[100;999]];$authoriD]


$settimeout[planted;10s;{
"channel": "$channelID",
"id:": "$authoriD",
"user": "$username"}]




$onlyIf[$getGlobalUserVar[grass]>=$multi[1;$message];**You do not own that many <:grass:926956974061543455>**]
$onlyIf[$getGlobalUserVar[seeds]>=$multi[1;$message];**You do not own that many <:seeds:926956863747153961>**]
$onlyIf[$checkContains[$message;-;.;,;_;+;infinity;#CHAR#;^;@;!;~]==false;**Sorry to break it to you but we dont allow symbols**]
$onlyIf[$message>=1;**Specify an amount**]
$onlyIf[$isNumber[$message]==true;**NOT A VALID NUMBER**]`
} , {
type: "timeout",
name: "planted",
code: `
$setGlobalUserVar[farmamount;0]
$channelSendMessage[$timeOutData[channel];**$timeOutData[user] you grew money and you earned $getGlobalUserVar[farmamount;$timeOutData[id]]**;no]$getServerVar[symbol]**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[farmamount]];$timeOutData[id]]`}]