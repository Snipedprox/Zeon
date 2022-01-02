module.exports = {
 name: "deval",
 aliases: ['djs', 'djseval'],
 help: {
 description: "Evaluate some javascript code!",
 usage: "deval <code>",
 perms: "BOT_OWNER"
 },
 code: `
\`\`\`js
$djsEval[try {
 $message
} catch (err) {
 err
};yes]
\`\`\`
 $argsCheck[>0;{newEmbed:{description:$getVar[no] **Usage: ** $getServerVar[prefix]$commandInfo[$toLowercase[$commandName];help.usage]}{color:CC0000}}]
 $onlyForIDs[$botOwnerID;896846485805744168;{newEmbed:{description:$getVar[no] **Permission needed: ** \`$commandInfo[$toLowercase[$commandName];help.perms]\`}{color:CC0000}}]
 `
}