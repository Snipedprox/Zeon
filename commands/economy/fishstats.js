module.epxorts = {
name: "pickaxe",
$if: "v4",
aliases: ['pick','paxe'],
code: `
$if[$message[1]==]
$title[1;**Pickaxe commands**]
$color[1;$getVar[color]]
$image[1;https://media.discordapp.net/attachments/924833272121413652/926545972790702131/0320033e-68e4-413c-83de-43a19ac4c2fb_static.png]
$description[1;
**Pickaxe stats
Basic information about the available pickaxe commands in order to run a sumbcommand you just do \`$getServerVar[prefix]pickaxe < subcommand >\` not that hard**

**Subcommands
\`\`\`
stats , list , upgrade , fix\`\`\`**

**Aliases
\`\`\`
pickaxe , pick , paxe\`\`\`**]
$else
$if[$message[1]==stats]
$title[1;**$username[$get[u]]'s pickaxe stats**]
$thumbnail[1;$useravatar[$get[u]]]
$color[1;$getVar[color]]
$description[1;
**Pickaxe: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pickaxe];silver;<:silverpickaxe:926548290277875712>];gold;<:goldpickaxe:926548373358641193>];candy;<:candypickaxe:926548448650621008>];amethyst;<:amethystpickaxe:926548560714010694>];spectre;<:spectre:926548638065389668>];legendary;<:legendarypickaxe:926548756147617812>];dev;<:devclaw:926548826150567998>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pickaxe];silver;Silver pickaxe];gold;Gold pickaxe];candy;Candy pickaxe];amethyst;Amethyst pickaxe];spectre;Spectre pickaxe];legendary;Legendary pickaxe];dev;Claws]**
**Durability: **[$repeatMessage[$getGlobalUserVar[durability;$get[u]];$replaceText[$getGlobalUserVar[durability;$get[u]];$getGlobalUserVar[durability;$get[u]];■]]]($getBotInvite)**]
$let[u;$findUser[$message[2];yes]]
$else
$if[$message[1]==list]
$title[1;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod list**]
$color[1;$getVar[color]]
$description[1;
**== $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod list ==**


**Your current fishing rod: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];enchant;Enchanted rod];sea;Ocean rod];gold;Golden rod];diamond;Diamond rod];emerald;Emerald rod];ruby;Ruby rod];obsidian;Obsidian rod];lava;Lava rod];dev;Developer rod]**

**Next fishing rod upgrade:** **$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;$customEmoji[oldrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];old;$customEmoji[woodrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];wood;$customEmoji[metalrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];metal;$customEmoji[lavarod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];dev;$customEmoji[Developerrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Old rod];old;Wooden rod];wood;Metal rod];metal;Lava rod];lava;You have reached max upgrade];dev;Developer rod]**]
$else
$if[$message[1]==repair]
$title[1;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod repaired**]
$color[1;$getVar[color]]
$description[1;
**You have repaired your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];enchant;Enchanted rod];sea;Ocean rod];gold;Golden rod];diamond;Diamond rod];emerald;Emerald rod];ruby;Ruby rod];obsidian;Obsidian rod];lava;Lava rod];dev;Developer rod] and paid $numberSeparator[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0]]]

$setGlobalUserVar[fd;10]

$onlyIf[$getGlobalUserVar[cash]>=$get[cost];**You dont have enough $getServerVar[symbol] you need $numberSeparator[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0];,]$getServerVar[symbol]**]


$let[cost;replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0]]
$endif
$endif
$endif
$endif`}











