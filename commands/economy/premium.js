module.exports = [{
name: "premium",
$if: "v4",
code: `
**Congrats you used your <:platinumwatch:926954905858637864> and this server premium for 1d**

$settimeout[premiums;1d;{
"channel": "$channelID",
"gid:": "$guildID"}]

$setServerVar[pp;on]
$setGlobalUserVar[watch;$sub[$getGlobalUserVar[watch];1]]
$onlyIf[$getServerVar[pp]==off;**Server already has premium**]
$onlyIf[$getGlobalUserVar[watch]>=1;**You do not own any <:platinumwatch:926954905858637864>**]`
}, {
type: "timeout",
name: "premiums",
code: `
$channelSendMessage[$timeOutData[channel];**Disabled premium**]
$setServerVar[pp;off;$timeoutdata[gid]]`}]