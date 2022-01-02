module.exports = {
name: "av",
aliases:['avatar','pfp'],
code: `
$title[1;**$usertag[$get[u]]'s avatar**]
$color[1;$getVar[color]]
$description[1;**You are viewing $usertag[$get[u]]'s avatar basic info**
**Discord id:** \`$get[u]\`
**Account date:** \`$creationDate[$get[u];date]\`
**Bot:** \`$replaceText[$replaceText[$isBot[$get[u]];true;They are a bot];false;Nope they are not a bot]\`]
$image[1;$useravatar[$get[u]]]
$let[u;$findUser[$message;yes]]`
}
