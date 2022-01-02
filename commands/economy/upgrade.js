module.exports = {
name: "supgrade",
code: `
$title[1;<:safe:926884622246240306> Safe upgraded]
$color[1;$getVar[color]]
$description[1;
**you upgraded your vaults storage and paid $numberSeparator[$multi[1000;$message];,]$getServerVar[symbol] and it can hold $numberSeparator[$multi[10;$message];,]$getServerVar[symbol] more!**]

$setGlobalUserVar[bankspace;$sum[$getGlobalUserVar[bankspace];$multi[10;$message]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message]]]

$onlyIf[$message>=1;**specify an amount**]
$onlyIf[$isNumber[$message]==true;**That is not a number**]
$onlyif[$checkContains[$message;,;.;-;=;+;_;#CHAR#]==false;**No dont use symbols**]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message];**You pay 1,000 per upgrade you cant pay $numberSeparator[$multi[1000;$message];,]**$getServerVar[symbol]]`}