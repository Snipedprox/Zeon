module.exports = {
name: "rob",
$if: "v4",
code: `
$if[$getGlobalUserVar[pad;$get[u]]==1]
**You managed to break their <​:padlocks:926269075318005850> but not their wallet**
$setGlobalUserVar[pad;0;$get[u]]
$let[u;$mentioned[1]]
$elseIf[$getGlobalUserVar[mask]==on]
**You have robbed $username[$get[u]] and got $random[1000;$getGlobalUserVar[cash;$get[u]]]$getServerVar[symbol]**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;$getGlobalUserVar[cash;$get[u]]]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$get[u]];$random[1000;$getGlobalUserVar[cash;$get[u]]]];$get[u]]
$let[u;$mentioned[1]]
$endElseIf
$elseIf[$getGlobalUserVar[mask]==off&&$randomText[win;lose;lose;lose;win]==lose]
**You got caught and you had to pay them $random[1000;$getGlobalUserVar[cash;$get[u]]]$getServerVar[symbol]**
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$random[1000;$getGlobalUserVar[cash;$get[u]]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$get[u]];$random[1000;$getGlobalUserVar[cash;$get[u]]]];$get[u]]
$let[u;$mentioned[1]]
$endElseIf
$else
**You have robbed $username[$get[u]] and got $random[1000;$getGlobalUserVar[cash;$get[u]]]$getServerVar[symbol]**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;$getGlobalUserVar[cash;$get[u]]]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$get[u]];$random[1000;$getGlobalUserVar[cash;$get[u]]]];$get[u]]
$let[u;$mentioned[1]]
$endif
$onlyIf[$getGlobalUserVar[cash;$get[u]]>=1000;**They need atleast 1,000$getServerVar[symbol]**]
$onlyIf[$get[u]!=;**Actually try mentioning someone**]
$onlyIf[$get[u]!=$authorid;**Actually try mentioning someone (that isnt you)**]
$onlyIf[$getGlobalUserVar[cash]>=1000;**You need atleast 1,000$getServerVar[symbol]**]
$let[u;$mentioned[1]]
$globalCooldown[50s;**Mhm give them some time to recover like try again in %time%**]`
  } 
