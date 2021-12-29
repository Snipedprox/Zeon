module.exports = {
name: "file",
code: `
$title[1;**$usertag[$authorid]'s file**]
$color[1;$getVar[color]]
$description[1;**Message will be deleted in 12s**]
$deletecommand
$deletein[12s]
$createFile[$message;$usertag[$authorid]'s file.txt]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server**]
$globalCooldown[$getGlobalUserVar[cooldown];**mind waiting %time%**]`}