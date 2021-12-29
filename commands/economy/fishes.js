module.exports = {
name: "fishes",
$if: "v4",
code: `
$title[1;**Fish inventory**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;
 <:commontype:924810999628984320> **┇** <:fish:925107840547454976> \`$numberSeparator[$getGlobalUserVar[fish;$get[u]];,]\` <:salmon:925107841751191572> \`$numberSeparator[$getGlobalUserVar[salmon;$get[u]];,]\` <:clownfish:925107839490469998> \`$numberSeparator[$getGlobalUserVar[clown;$get[u]];,]\`

 <:uncommontype:924811051579613225> **┇** <:bluefishs:925107839389806642> \`$numberSeparator[$getGlobalUserVar[blue;$get[u]];,]\` <:squud:925107842028040192> \`$numberSeparator[$getGlobalUserVar[squid;$get[u]];,]\` <:dolphin:925107840014774272> \`$numberSeparator[$getGlobalUserVar[dolphin;$get[u]];,]\`

 <:raretype:924811098828472361> **┇** <:spacefish:925107841893814353> \`$numberSeparator[$getGlobalUserVar[space;$get[u]];,]\` <:shark:925107841927372810> \`$numberSeparator[$getGlobalUserVar[shark;$get[u]];,]\` <:galaticcrab:925107840622923817> \`$numberSeparator[$getGlobalUserVar[crab;$get[u]];,]\`]
$let[u;$findUser[$message;yes]]`}



