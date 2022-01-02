module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getServerVar[alt]==on]
$if[$creationDate[$authorid;ms]>$getServerVar[time]]
$setServerVar[alt;on]
$else
$deletecommand
$endif
$else
$if[$getServerVar[alt]==off]
$setServerVar[alt;off]
$endif
$endif`
}
