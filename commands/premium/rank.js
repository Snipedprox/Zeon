module.exports = {
name: "rank",
code: `
$title[1;**Rank card**]
$color[1;a9bffd]
$description[1;
**rank card of $username[$get[user]]**]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getGlobalUserVar[level;$get[user]]&rank=&currentxp=$getGlobalUserVar[xp;$get[user]]&nextlevelxp=$getGlobalUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getGlobalUserVar[card;$get[u]]&xpcolor=$getGlobalUserVar[rcolor;$get[u]]&isboosting=true]



$let[user;$mentioned[1;yes]]
`}