module.exports = {
name: "flex",
$if: "v4",
code: `
$color[1;YELLOW]
$description[1;
**$username is flexing on everyone with their <:rainbowcurser:926956138631663658> rainbow cursor, they have $numberSeparator[$getGlobalUserVar[cursor];,] of them what alegend**]

$onlyIf[$getGlobalUserVar[cursor]>=1;**You do not own any <:rainbowcurser:926956138631663658>**]`}