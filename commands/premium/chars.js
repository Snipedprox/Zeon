module.exports = {
name: "chars",
aliases: ['char','chers'],
code: `
$title[1;**Message chars**]
$color[1;$getVar[color]]
$description[1;**That message has $charCount[$message] chars , $charCount[$findNumbers[$message]] numbers , $charCount[$findSpecialChars[$message]] special chars**]
$onlyIf[$charCount[$message]>=1;**specify a message**]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server**]

$globalCooldown[$getGlobalUserVar[cooldown];**mind waiting %time%**]`}