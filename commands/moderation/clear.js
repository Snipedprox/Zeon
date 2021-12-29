module.exports = {
name: "clear",
aliases: ['purge','delete'],
code: `
$title[1;**Messages successfully deleted**]
$color[1;$getVar[color]]
$description[1;$getVar[success] **Successfully deleted \`$numberSeparator[$truncate[$message];,]\` messages**]
$clear[$truncate[$message]]
$onlyIf[$message>0;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **Specify an amount**}}]
$onlyIf[$isNumber[$message]==true;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **That is not a valid number**}}]
$onlyPerms[managemessages;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **You are missing the perm \`MANAGE_MESSAGES\` **}}]`}