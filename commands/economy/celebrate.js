module.exports = {
name: "celebrate",
$if: "v4",
aliases: ['cel','celibrate'],
code: `
$title[1;**Celebrate?**]
$color[1;231789]
$description[1;<:balloons:926955931701477426> **You let some balloons in the air for no reason hooray?**]
$setGlobalUserVar[bloons;$sub[$getGlobalUserVar[bloons];1]]

$onlyIf[$getGlobalUserVar[bloons]>=1;**You do not own any <:balloons:926955931701477426>**]`}