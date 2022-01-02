module.exports = [{
name: "pray",
$if: "v4",
code: `
$title[1;**Amen...**]
$color[1;YELLOW]
$thumbnail[1;https://cdn.discordapp.com/emojis/926955351952220180.png?size=56]
$description[1;

**<:cross:926955351952220180>═══════════════════<:cross:926955351952220180>**

**You took your <:cross:926955351952220180> cross and prayed to heaven now lets wait for results be patient**]

$settimeout[pray;10s;{
"channel": "$channelID",
"name:": "$username",
"id": "$authorID"}]
$onlyIf[$getGlobalUserVar[cross]>=1;**God does not accept people without crosses go buy one first]`
}, {
type: "timeout",
name: "pray",
code: `
$channelSendMessage[$timeOutData[channel];**Well i guess praying is worth it and god gave you $numberSeparator[$random[1000;5000];,]$getServerVar[symbol]**;no]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$timeoutdata[id]];$random[1000;5000]];$timeOutData[id]]`}]