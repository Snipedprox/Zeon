module.exports = {
name: "travel",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message;land;island]]==true]
$title[1;**Travel...**]
$color[1;$getVar[color]]
$description[1;**You have travelled from $replaceText[$replaceText[$replaceText[$getGlobalUserVar[location];land;<:biomeland:925107838743896094> Island];volcano;<:biomevalcanicland:925107839075238008> Volcano];moon;<:biomespace:925107838827778049> Moon] to <:biomeland:925107838743896094>**]
$setGlobalUserVar[location;land]

$onlyIf[$getGlobalUserVar[location]!=land;**How do you travel from land to land?**]

$else

$if[$toLowerCase[$checkContains[$message;space;moon]]==true]
$title[1;**Travel...**]
$color[1;$getVar[color]]
$description[1;**You have travelled from $replaceText[$replaceText[$replaceText[$getGlobalUserVar[location];land;<:biomeland:925107838743896094> Island];volcano;<:biomevalcanicland:925107839075238008> Volcano];moon;<:biomespace:925107838827778049> Moon] to <:biomespace:925107838827778049>**]
$setGlobalUserVar[location;moon]

$onlyIf[$getGlobalUserVar[location]!=moon;**How do you travel from moon to moon?**]
$onlyIf[$getGlobalUserVar[cash]>=25;**You have to be level 25 or more**]
$else

$if[$toLowerCase[$checkContains[$message;volc;volcano]]==true]
$title[1;**Travel...**]
$color[1;$getVar[color]]
$description[1;**You have travelled from $replaceText[$replaceText[$replaceText[$getGlobalUserVar[location];land;<:biomeland:925107838743896094> Island];volcano;<:biomevalcanicland:925107839075238008> Volcano];moon;<:biomespace:925107838827778049>] to <:biomevalcanicland:925107839075238008>**]
$setGlobalUserVar[location;volcano]

$onlyIf[$getGlobalUserVar[location]!=volcano;**How do you travel from volcanic land to another volcanic land when only one exists?**]
$onlyIf[$getGlobalUserVar[cash]>=50;**You have to be level 50 or more**]
$else
$if[$message==]
$title[1;**Lost?*]
$color[1;GREY]
$description[1;**are you lost if so heres a list to where you can travel
\`\`\`volcano / volc
moon / space
land / island\`\`\`**]
$endif
$endif
$endif
$endif

$globalCooldown[$getGlobalUserVar[bcooldown];**Hollup you have to wait %time%**]`}
