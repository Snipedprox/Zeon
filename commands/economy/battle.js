module.exports = [{
name: "battle",
$if: "v4",
code: `
$awaitMessages[$channelId;$authorid;5m;hit,escape;hit,escape;**You just ran off like a scaredy cat what a fool you are**;{}]



$title[1;**$randomText[<:demonics:927273944191488041> Demon encountered;<:skully:927274457700118528> Angry skull encountered;<:derpling:927274834268946502> Derpling encountred;<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;<:icegolem:927275386981736479> Ice golem ecountered;<:Drakin:927275592120930324> Drakin encountrerd]**]
$description[1;**You encountered an $randomText[<:demonics:927273944191488041> Demon encountered;<:skully:927274457700118528> Angry skull encountered;<:derpling:927274834268946502> Derpling encountred;<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;<:icegolem:927275386981736479> Ice golem ecountered;<:Drakin:927275592120930324> Drakin encountrerd] do choose to**
\`hit\` **or** \`escape\`]

$setGlobalUserVar[mobhp;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[<:demonics:927273944191488041> Demon encountered;<:skully:927274457700118528> Angry skull encountered;<:derpling:927274834268946502> Derpling encountred;<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;<:icegolem:927275386981736479> Ice golem ecountered;<:Drakin:927275592120930324> Drakin encountrerd];<:demonics:927273944191488041> Demon encountered;200];<:skully:927274457700118528> Angry skull encountered;250];<:derpling:927274834268946502> Derpling encountred;150];<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;500];<:icegolem:927275386981736479> Ice golem ecountered;400];<:Drakin:927275592120930324> Drakin encountrerd;300]]

$setGlobalUserVar[health;200]
$setGlobalUserVar[mob;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[<:demonics:927273944191488041> Demon encountered;<:skully:927274457700118528> Angry skull encountered;<:derpling:927274834268946502> Derpling encountred;<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;<:icegolem:927275386981736479> Ice golem ecountered;<:Drakin:927275592120930324> Drakin encountrerd];<:demonics:927273944191488041> Demon encountered;demon];<:skully:927274457700118528> Angry skull encountered;skull];<:derpling:927274834268946502> Derpling encountred;derpling];<:Dreadnautilus:927275067795189780> Dreadnautilus encountered;dread];<:icegolem:927275386981736479> Ice golem ecountered;ice];<:Drakin:927275592120930324> Drakin encountrerd;drakin]]`
} , {
type: "awaited",
name: "escape",
code: `
$thumbnail[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[mob];demon;https://cdn.discordapp.com/emojis/927273944191488041.png?size=128];skull;https://cdn.discordapp.com/emojis/927274457700118528.png?size=128];derpling;https://cdn.discordapp.com/emojis/927274834268946502.png?size=128];dread;https://cdn.discordapp.com/emojis/927275067795189780.png?size=128];ice;https://cdn.discordapp.com/emojis/927275386981736479.png?size=128];drakin;https://cdn.discordapp.com/emojis/927275592120930324.png?size=128]]

$title[1;**Escaped**]
$color[1;338811]
$description[1;**you escaped coz you a fool**]
$setGlobalUserVar[mobhp;0]
$setGlobalUserVar[mob;0]`
} , {
type: "awaited",
name: "hit",
code: `
$if[$getGlobalUserVar[mobhp]>=2]

$awaitMessages[$channelId;$authorid;5m;hit,escape;hit,escape;**You just ran off like a scaredy cat what a fool you are**;{}]
$thumbnail[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[mob];demon;https://cdn.discordapp.com/emojis/927273944191488041.png?size=128];skull;https://cdn.discordapp.com/emojis/927274457700118528.png?size=128];derpling;https://cdn.discordapp.com/emojis/927274834268946502.png?size=128];dread;https://cdn.discordapp.com/emojis/927275067795189780.png?size=128];ice;https://cdn.discordapp.com/emojis/927275386981736479.png?size=128];drakin;https://cdn.discordapp.com/emojis/927275592120930324.png?size=128]]
$title[1;**You attacked**]
$color[1;RANDOM]
$description[1;**You hit that $getGlobalUserVar[mob] which dealth some decent damage - $random[1;$getGlobalUserVar[health]] <:health:920454689504509952> to be exact it then $randomText[unleashed a screach;stabbed you;hit you in the testicles;hit you hard;called your mom fat] which did some damage - $random[0;$getGlobalUserVar[health]] <:health:920454689504509952>. what will you do?**
\`hit\` **or** \`escape\`]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;$getGlobalUserVar[health]]]
$setGlobalUserVar[mobhp;$sub[$getGlobalUserVar[mobhp];$random[1;$getGlobalUserVar[health]]]

$else

$if[$getGlobalUserVar[health]=<1]


$thumbnail[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[mob];demon;https://cdn.discordapp.com/emojis/927273944191488041.png?size=128];skull;https://cdn.discordapp.com/emojis/927274457700118528.png?size=128];derpling;https://cdn.discordapp.com/emojis/927274834268946502.png?size=128];dread;https://cdn.discordapp.com/emojis/927275067795189780.png?size=128];ice;https://cdn.discordapp.com/emojis/927275386981736479.png?size=128];drakin;https://cdn.discordapp.com/emojis/927275592120930324.png?size=128]]
$title[1;**You lost**]
$color[1;RANDOM]
$description[1;**You tried hard GG**]

$else

$if[$getGlobalUserVar[mobhp]=<2]

$awaitMessages[$channelId;$authorid;5m;hit,escape;hit,escape;**You just ran off like a scaredy cat what a fool you are**;{}]
$thumbnail[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[mob];demon;https://cdn.discordapp.com/emojis/927273944191488041.png?size=128];skull;https://cdn.discordapp.com/emojis/927274457700118528.png?size=128];derpling;https://cdn.discordapp.com/emojis/927274834268946502.png?size=128];dread;https://cdn.discordapp.com/emojis/927275067795189780.png?size=128];ice;https://cdn.discordapp.com/emojis/927275386981736479.png?size=128];drakin;https://cdn.discordapp.com/emojis/927275592120930324.png?size=128]]
$title[1;**You attacked**]
$color[1;RANDOM]
$description[1;**You hit that $getGlobalUserVar[mob] and won!!! here you go + $random[1;50000] $getServerVar[symbol]**]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;5000]]]

$endif
$endif
$endif`}]


