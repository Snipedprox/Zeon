module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];2]]
$globalCooldown[$getGlobalUserVar[cooldown]]`}