module.exports = [{
name: "plant",
$if: "v4",
code: `
**You planted 1 <:seeds:926956863747153961> in your <:grass:926956974061543455>**

$settimeout[plant;30s;{
"channel": "$channelID",
"id:": "$authoriD",
"user": "$username"}]
$setGlobalUserVar[grass;$sub[$getGlobalUserVar[grass];1]]
$setGlobalUserVar[seeds;$sub[$getGlobalUserVar[seeds];1]]
$globalCooldown[31s;**Wait %time%**]
$onlyIf[$getGlobalUserVar[grass]>=1;**You do not own any <:grass:926956974061543455>**]
$onlyIf[$getGlobalUserVar[seeds]>=1;**You do not own any <:seeds:926956863747153961>**]`
}, {
type: "timeout",
name: "plant",
code: `
$channelSendMessage[$timeOutData[channel];**You grew some money $timeOutdata[user] and got $numberSeparator[$random[1000;5000];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]`}]