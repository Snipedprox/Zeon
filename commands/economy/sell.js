module.exports = {
name: "sell",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message[1];quartz;quarts;quart]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:quartz:926585163801067530> and earned $numberSeparator[$truncate[$multi[$message[2];37]];,]$getServerVar[symbol]**]


$setGlobalUserVar[quartz;$sub[$getGlobalUserVar[quartz];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[37;$message[2]]]]


$onlyIf[$getGlobalUserVar[quartz]>=$truncate[$multi[$message[2];1]];**You do not have enough <:quartz:926585163801067530>**]

$else

$if[$toLowerCase[$checkContains[$message[1];amythist;amethist;amethyst;amyth]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:amethyst:926585236211499018> and earned $numberSeparator[$truncate[$multi[$message[2];87]];,]$getServerVar[symbol]**]


$setGlobalUserVar[amethyst;$sub[$getGlobalUserVar[amethyst];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[87;$message[2]]]]


$onlyIf[$getGlobalUserVar[amethyst]>=$truncate[$multi[$message[2];1]];**You do not have enough <:amethyst:926585236211499018>**]

$else

$if[$toLowerCase[$checkContains[$message[1];emb;ember;embers;embrs]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:ember:926585426490306600> and earned $numberSeparator[$truncate[$multi[$message[2];117]];,]$getServerVar[symbol]**]


$setGlobalUserVar[ember;$sub[$getGlobalUserVar[ember];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[117;$message[2]]]]


$onlyIf[$getGlobalUserVar[ember]>=$truncate[$multi[$message[2];1]];**You do not have enough <:ember:926585426490306600>**]

$else

$if[$toLowerCase[$checkContains[$message[1];obs;obsidian;obisidian;sidian]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:obsidian:926585310719148052> and earned $numberSeparator[$truncate[$multi[$message[2];99]];,]$getServerVar[symbol]**]


$setGlobalUserVar[obsidian;$sub[$getGlobalUserVar[obsidian];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[99;$message[2]]]]


$onlyIf[$getGlobalUserVar[obsidian]>=$truncate[$multi[$message[2];1]];**You do not have enough <:obsidian:926585310719148052>**]


$else

$if[$toLowerCase[$checkContains[$message[1];emeralds;emerald;emrald;emralds]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:emeralds:926585524347617300> and earned $numberSeparator[$truncate[$multi[$message[2];99]];,]$getServerVar[symbol]**]


$setGlobalUserVar[emerald;$sub[$getGlobalUserVar[emerald];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[99;$message[2]]]]


$onlyIf[$getGlobalUserVar[emerald]>=$truncate[$multi[$message[2];1]];**You do not have enough <:emeralds:926585524347617300>**]


$else

$if[$toLowerCase[$checkContains[$message[1];cryst;crystal;cry;crys]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:crystal:926585587148927016> and earned $numberSeparator[$truncate[$multi[$message[2];959]];,]$getServerVar[symbol]**]


$setGlobalUserVar[crystal;$sub[$getGlobalUserVar[crystal];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[959;$message[2]]]]


$onlyIf[$getGlobalUserVar[crystal]>=$truncate[$multi[$message[2];1]];**You do not have enough <:crystal:926585587148927016> **]

$else

$if[$toLowerCase[$checkContains[$message[1];fish;fishy;fishes]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:fish:925107840547454976> and earned $numberSeparator[$truncate[$multi[$message[2];5]];,]$getServerVar[symbol]**]


$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[5;$message[2]]]]


$onlyIf[$getGlobalUserVar[fish]>=$truncate[$multi[$message[2];1]];**You do not have enough <:fish:925107840547454976>**]

$else

$if[$toLowerCase[$checkContains[$message[1];salmon;salm;salmen]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:salmon:925107841751191572> and earned $numberSeparator[$truncate[$multi[$message[2];7]];,]$getServerVar[symbol]**]


$setGlobalUserVar[salmon;$sub[$getGlobalUserVar[salmon];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[7;$message[2]]]]


$onlyIf[$getGlobalUserVar[salmon]>=$truncate[$multi[$message[2];1]];**You do not have enough <:salmon:925107841751191572>**]

$else

$if[$toLowerCase[$checkContains[$message[1];clown;clawn;clowns;clownfish]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:clownfish:925107839490469998> and earned $numberSeparator[$truncate[$multi[$message[2];10]];,]$getServerVar[symbol]**]


$setGlobalUserVar[clown;$sub[$getGlobalUserVar[clown];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[10;$message[2]]]]


$onlyIf[$getGlobalUserVar[clown]>=$truncate[$multi[$message[2];1]];**You do not have enough <:clownfish:925107839490469998>**]

$else

$if[$toLowerCase[$checkContains[$message[1];blue;blues;bluefish;bluefishh]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:bluefishs:925107839389806642> and earned $numberSeparator[$truncate[$multi[$message[2];15]];,]$getServerVar[symbol]**]


$setGlobalUserVar[blue;$sub[$getGlobalUserVar[blue];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[15;$message[2]]]]


$onlyIf[$getGlobalUserVar[blue]>=$truncate[$multi[$message[2];1]];**You do not have enough <:bluefishs:925107839389806642>**]

$else

$if[$toLowerCase[$checkContains[$message[1];squid;squids;sq]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:squud:925107842028040192> and earned $numberSeparator[$truncate[$multi[$message[2];20]];,]$getServerVar[symbol]**]


$setGlobalUserVar[squid;$sub[$getGlobalUserVar[squid];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[20;$message[2]]]]


$onlyIf[$getGlobalUserVar[squid]>=$truncate[$multi[$message[2];1]];**You do not have enough <:squud:925107842028040192>**]

$else

$if[$toLowerCase[$checkContains[$message[1];dolphin;dolph;dolphen]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:dolphin:925107840014774272> and earned $numberSeparator[$truncate[$multi[$message[2];25]];,]$getServerVar[symbol]**]


$setGlobalUserVar[dolphin;$sub[$getGlobalUserVar[dolphin];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[25;$message[2]]]]


$onlyIf[$getGlobalUserVar[dolphin]>=$truncate[$multi[$message[2];1]];**You do not have enough <:dolphin:925107840014774272>**]

$else

$if[$toLowerCase[$checkContains[$message[1];space;spacefish;spaces]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:spacefish:925107841893814353> and earned $numberSeparator[$truncate[$multi[$message[2];50]];,]$getServerVar[symbol]**]


$setGlobalUserVar[space;$sub[$getGlobalUserVar[space];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[50;$message[2]]]]


$onlyIf[$getGlobalUserVar[space]>=$truncate[$multi[$message[2];1]];**You do not have enough <:spacefish:925107841893814353>**]

$else

$if[$toLowerCase[$checkContains[$message[1];crab;galatic;crabs]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:galaticcrab:925107840622923817> and earned $numberSeparator[$truncate[$multi[$message[2];100]];,]$getServerVar[symbol]**]


$setGlobalUserVar[crab;$sub[$getGlobalUserVar[crab];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[100;$message[2]]]]


$onlyIf[$getGlobalUserVar[shark]>=$truncate[$multi[$message[2];1]];**You do not have enough <:galaticcrab:925107840622923817>**]
$else

$if[$toLowerCase[$checkContains[$message[1];shark;sharks;sharkk]]==true]
$title[1;**Items sold**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You sold $numberSeparator[$truncate[$multi[1;$message[2]]];,] <:shark:925107841927372810> and earned $numberSeparator[$truncate[$multi[$message[2];90]];,]$getServerVar[symbol]**]


$setGlobalUserVar[shark;$sub[$getGlobalUserVar[shark];$multi[1;$message[2]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[90;$message[2]]]]


$onlyIf[$getGlobalUserVar[shark]>=$truncate[$multi[$message[2];1]];**You do not have enough <:shark:925107841927372810>**]
$else

$title[1;**Error occured**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
**You didnt specify anything to sell heres a list of the sellables**
\`fish , salmon , clown , blue , squid , dolphin , space , crab , shark , quartz , amethyst , ember , crystal , obsidian , emerald\`
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$message[2]>=1;**Please specify an amount #COLON#D**]
$onlyIf[$isNumber[$message[2]]==true;**That is not a number**]
$onlyIf[$checkContains[$message[2];-;_;+;.;,]==false;**dont use those symbols**]
`}








