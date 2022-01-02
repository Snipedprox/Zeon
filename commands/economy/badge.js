module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[level]==1]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You got to level [1]($getVar[support]) and got the beginner badge <:beginner:926233614558040074>**]
$setGlobalUserVar[bbadge;true]
$onlyIf[$getGlobalUserVar[bbadge]==false;]
$else
$if[$getGlobalUserVar[level]==5]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You got to level [5]($getVar[support]) and got the noob badge <:noob:926233405891412048>**]
$setGlobalUserVar[nbadge;true]
$onlyIf[$getGlobalUserVar[nbadge]==false;]
$else
$if[$getGlobalUserVar[level]==10]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You got to level [10]($getVar[support]) and got the amateur badge <:intern:926233065834037369>**]
$setGlobalUserVar[ibadge;true]
$onlyIf[$getGlobalUserVar[ibadge]==false;]
$else
$if[$getGlobalUserVar[level]==25]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You got to level [25]($getVar[support]) and got the pro badge <:pro:926233216573145129>**]
$setGlobalUserVar[pbadge;true]
$onlyIf[$getGlobalUserVar[ibadge]==false;]
$else
$if[$getGlobalUserVar[level]==50]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You got to level [50]($getVar[support]) and got the level badge <:levelbadge:926229028149559306>**]
$setGlobalUserVar[lbadge;true]
$onlyIf[$getGlobalUserVar[lbadge]==false;]
$else
$if[$getGlobalUserVar[fish]==150]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You managed to get [150]($getVar[support]) <:fish:925107840547454976> and got the fish badge <:fisherbadge:926230602070491136>**]
$setGlobalUserVar[fbadge;true]
$onlyIf[$getGlobalUserVar[fbadge]==false;]
$else
$if[$getGlobalUserVar[cash]>1000000]
$title[1;**Badge aquired**]
$color[1;E7E700]
$description[1;**You managed to get [1,000,000]($getVar[support]) $getServerVar[symbol] and got the cash badge <:cbadge:926230909164879872>**]
$setGlobalUserVar[cbadge;true]
$onlyIf[$getGlobalUserVar[cbadge]==false;]
$endif
$endif
$endif
$endif
$endif
$endif
$endif`}