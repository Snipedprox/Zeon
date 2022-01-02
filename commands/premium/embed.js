module.exports = {
name: "embed",
code: `
$title[1;**$usertag[$authorid]'s message**]
$color[1;$getVar[color]]
$description[1;**$message**]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server**]
$globalCooldown[$getGlobalUserVar[cooldown];**mind waiting %time%**]`}