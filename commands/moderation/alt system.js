module.exports = {
name: "alt",
$if: "v4",
code: `
$if[$message[1]==enable]
$title[1;**Alt system enable**]
$color[1;$getServerVar[color]]
$description[1;**$getVar[success] Successfully enabled alt account system **
Enabled: yes
Time: \`$numberSeparator[$truncate[$message[2]];,]\` :stopwatch:**]
$setServerVar[alt;on]
$setServerVar[time;$truncate[$message[2]]]




$onlyIf[$getServerVar[alt]==off;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **The alt system has already been enabled**}}]
$onlyIf[$isNumber[$message[2]]==true;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **That is not a number**}}]
$onlyIf[$message[2]>0;{newEmbed: {author: Error occured} {description:**Invalid usgae of this command
\`$getServerVar[prefix]alt enable / disale <amount in ms> \`**} {color:RED}}]
$else
$if[$message[1]==disable]
$title[1;**Alt system disabled**]
$color[1;$getServerVar[color]]
$description[1;**$getVar[success] Successfully disabled alt account system **]
$setServerVar[alt;off]


$onlyIf[$getServerVar[alt]==on;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **The alt system has already been disabled**}}]
$else
**$getVar[error] You can only choose from
\`enable / disable\`**
$endif
$endif

$onlyPerms[manageserver;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **You do not have enough perms you are missing the \`MANAGE_SERVER\` permission**}}]`}














