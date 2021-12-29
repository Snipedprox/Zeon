module.exports = {
name: "beg",
$if: "v4",
code: `
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$title[1;**Pog**]
$color[1;$getVar[color]]
$description[1;**"$randomtext[poor beggar here you go;omg get away here;poor boy i feel bad for you here;plz dont bully me but here you go;dont go buy drugs here]" you got $truncate[$divide[$random[1;5000];$random[3;7]]]$getServerVar[symbol]**]

$setGlobalUserVar[wl;$sum[$getGlobalUserVar[wl];1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$divide[$random[1;5000];$random[3;7]]]]


$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`}










