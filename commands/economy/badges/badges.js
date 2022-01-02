module.exports = ({
name: "badges",
$if: "v4",
aliases: "badge",
code: `
$title[1;**$usertag[$get[u]] badges**]
$color[1;$getVar[color]]
$description[1;
**»** $replaceText[$replaceText[$getGlobalUserVar[lbadge;$get[u]];true;<:levelbadge:926229028149559306>];false;] $replaceText[$replaceText[$getGlobalUserVar[fbadge;$get[u]];true;<:fisherbadge:926230602070491136>];false;] $replaceText[$replaceText[$getGlobalUserVar[cbadge;$get[u]];true;<:cbadge:926230909164879872>];false;] $replaceText[$replaceText[$getGlobalUserVar[dbadge;$get[u]];true;<:developer:926232892223410247>];false;] $replaceText[$replaceText[$getGlobalUserVar[ibadge;$get[u]];true;<:intern:926233065834037369>];false;] $replaceText[$replaceText[$getGlobalUserVar[pbadge;$get[u]];true;<:pro:926233216573145129>];false;] $replaceText[$replaceText[$getGlobalUserVar[nbadge;$get[u]];true;<:noob:926233405891412048>];false;] $replaceText[$replaceText[$getGlobalUserVar[bbadge;$get[u]];true;<:beginner:926233614558040074>];false;] **«**]
$let[u;$findUser[$message;yes]]`})
