module.exports = [{
    name: "panik",
    code: `
$title[1;<:utils:924453722543751228> **Panik**]
$color[1;$getVar[color]] $image[1;https://api.devs-hub.xyz/panik?panik=$replaceText[$splitText[1]&kalm=$splitText[2]&panik2=$splitText[3]; ;+;-1]]
$onlyIf[$splitText[3]!=;Usage: \`$getServerVar[prefix]panik\` text1/text2/text3, you're missing text3 separated by /]
$onlyIf[$splitText[2]!=;Usage: \`$getServerVar[prefix]panik\` text1/text2/text3, you're missing text2 separated by /]
$onlyIf[$splitText[1]!=;Usage: \`$getServerVar[prefix]panik\`  text1/text2/text3, separated by /]

$textSplit[$message;/]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
} , {
    name: "achievement",
    code: `
$title[1;<:utils:924453722543751228> **Achievement**]
$color[1;$getVar[color]] $image[1;https://minecraftskinstealer.com/achievement/2/New+achievement%21/$replaceText[$message; ;+]]

$onlyIf[$message!=;\`$getServerVar[prefix]achievement <text>\`]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
`
} , {
    name: "trash",
    code: `
$title[1;<:utils:924453722543751228> **Trash**]
$color[1;$getVar[color]] $image[1;https://api.berk404.ga/trash?image=$userAvatar[$findUser[$mentioned[1;yes]]]?size=2048]
$onlyIf[$message!=;\`$getServerVar[prefix]trash <mention>\`]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
} , {
    name: "sus",
    code: `
$title[1;<:utils:924453722543751228> **Sussy baka-**]
$color[1;$getVar[color]] $image[1;https://api.berk404.ga/sus?impostor=$userAvatar[$mentioned[1;yes]]&crewmate=$userAvatar[$mentioned[2;yes]]]


$onlyIf[$charCount[$message]>1; Usage: \`$getServerVar[prefix]imposter <mention1> <mention2>\`]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
} , {
    name: "ship",
    code: `
$title[1;<:utils:924453722543751228> **I ship**]
$color[1;$getVar[color]] $image[1;https://api.popcat.xyz/ship?user1=$userAvatar[$mentioned[1;yes]]?size=4096&user2=$userAvatar[$mentioned[2;yes]]?size=4096]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
} , {
    name: "clyde",
    code: `
$title[1;<:utils:924453722543751228> **Clyde**]
$color[1;$getVar[color]] $image[1;https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;%20;-1]]
$argsCheck[>1;Please type something for Clyde to say]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
} , {
    name: "gun",
    code: `
$title[1;<:utils:924453722543751228> **Pew pew**]
$image[1;https://api.devs-hub.xyz/gun?image=$userAvatar[$findUser[$message;yes]]]
$color[1;$getVar[color]]
$onlyIf[$userExists[$findUser[$message;yes]]==true;🚫 **| Please Mention A Valid User**]

$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]
    `
}, {
    name: "glitch", 
code: `
$title[1;<:utils:924453722543751228> **Glitch**]
$image[1;https://api.devs-hub.xyz/glitch?image=$userAvatar[$findUser[$message;yes]]]
$color[1;$getVar[color]]
$onlyIf[$getServerVar[pp]==on;<:premiumcrown:924691807969894410> **This is not a premium server buy premium first then activate it**]

`
}]