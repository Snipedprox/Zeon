module.exports = {
name: "prefix",
code: `
$setServerVar[prefix;$message]
$title[1;<:statss:924456918515351612> **Prefix changed**]
$color[1;$getVar[color]]
$description[1;<:statss:924456918515351612> **I have successfully changed my server prefix to \`$message\`**]
$onlyIf[$charCount[$message]>=1;**You need to specify a valid prefix**]
$onlyIf[$checkContains[$message;\`;#CHAR#eval]==false;**I do not accept that symbol**]
$onlyPerms[manageserver;managemessages;**For security reason you need the perms \`MANAGE_SERVER\` and \`MANAGE_MESSAGES\`**]
`
}