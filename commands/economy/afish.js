module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[xp]>=$getGlobalUserVar[req]]


$title[1;**Levelled up**]
$color[1;$getVar[color]]
$description[1;**Well done $username your new level is [$getGlobalUserVar[level]]($getVar[support])**]


$setGlobalUserVar[level;$sum[$getGlobalUserVar[level];1]]
$setGlobalUserVar[req;$sum[$getGlobalUserVar[req];50]]
$endif

`
}


