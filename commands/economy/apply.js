module.exports = {
name: "apply",
$if: "v4",
code: `
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$if[$checkContains[$message;white;witt;whites]==true]
$title[1;**job aquired**]
$color[1;$getVar[color]]
$description[1;**You have applied for the white hat hackers and you got accepted congrats**]

$setGlobalUserVar[job;white]
$onlyIf[$getGlobalUserVar[cmd]>=50;{newEmbed: {color:$getVar[color]} {description:**you need to have executed atleast \`50\` commands**}}]
$else
$if[$checkContains[$message;black;blak;bleck]==true]
$title[1;**job aquired**]
$color[1;$getVar[color]]
$description[1;**You have applied for the black hat hackers and you got accepted congrats**]

$setGlobalUserVar[job;black]
$onlyIf[$getGlobalUserVar[cmd]>=100;{newEmbed: {color:$getVar[color]} {description:**you need to have executed atleast \`100\` commands**}}]
$else
$if[$checkContains[$message;gray;grey;greay]==true]
$title[1;**job aquired**]
$color[1;$getVar[color]]
$description[1;**You have applied for the grey hat hackers and you got accepted congrats**]

$setGlobalUserVar[job;grey]
$onlyIf[$getGlobalUserVar[cmd]>=500;{newEmbed: {color:$getVar[color]} {description:**you need to have executed atleast \`500\` commands**}}]
$else
**Check the joblist and come again because rn you are being foolish**
$endif
$endif
$endif


$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`}