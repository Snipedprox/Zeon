module.exports = {
name: "adventure",
$if: "v4",
aliases: ['search','adv'],
code: `
$if[$getGlobalUserVar[location]==land]
$title[1;**Location#COLON# <:biomeland:925107838743896094> land**]
$color[1;$getVar[color]]
$description[1;**You went on an adventure on land and got**
\`+ $random[1;5]\` <:commonbox:925836835501010944> **common lootbox**
\`+ $random[50;100]\` <:basic:925851430659686411> **basic lootbox**
\`+ $random[1;6]\` <:uncommonbx:925837497743843409> **uncommon lootbox**
\`+ $random[1;500]\` $getServerVar[symbol] **cash**]



$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$random[1;5]]]
$setGlobalUserVar[basic;$sum[$getGlobalUserVar[basic];$random[50;100]]]
$setGlobalUserVar[uncommon;$sum[$getGlobalUserVar[uncommon];$random[1;6]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;500]]]


$else

$if[$getGlobalUserVar[location]==moon]
$title[1;**Location#COLON# <:biomespace:925107838827778049> moon**]
$color[1;$getVar[color]]
$description[1;**You went on an adventure in space and got**
\`+ $random[1;2]\` <:hackerchest:925107840862007306> **hacker lootbox**
\`+ $random[1;60]\` <:spacefish:925107841893814353> **space fish**
\`+ $random[1000;5000]\` $getServerVar[symbol] **cash**]



$setGlobalUserVar[hacker;$sum[$getGlobalUserVar[hacker];$random[1;2]]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];$random[1;60]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$else
$if[$getGlobalUserVar[location]==volcano]
$title[1;**Location#COLON# <:biomevalcanicland:925107839075238008> volcanic**]
$color[1;$getVar[color]]
$description[1;**You went on an adventure in volcanic territory and got**
\`+ $random[1;2]\` <:hackerchest:925107840862007306> **hacker lootbox**
\`+ $random[100;600]\` <:clownfish:925107839490469998> **clownfish**
\`+ $random[10000;50000]\` $getServerVar[symbol] **cash**
\`+ $random[5;15]\` <a:xp:925838552917487618> **Levels's**
\`+ $random[1000;5000]\` $getServerVar[symbol] **cash**]



$setGlobalUserVar[hacker;$sum[$getGlobalUserVar[hacker];$random[1;2]]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];$random[100;600]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10000;50000]]]
$setGlobalUserVar[level;$sum[$getGlobalUserVar[level];$random[5;15]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$endif
$endif
$endif

$globalCooldown[$getGlobalUserVar[bcooldown];**Hollup you have to wait %time%**] `}









