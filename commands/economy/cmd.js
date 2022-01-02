module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$stringStartsWith[$message;z/]==true]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]
$endif`}