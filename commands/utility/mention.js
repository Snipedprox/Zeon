module.exports = {
name: "<@$clientid>",
nonPrefixed: true,
code: `
$title[1;<:utils:924453722543751228> **Stop the ping**]
$color[1;$getVar[color]]
$description[1;**Prefix »** \`$getServerVar[prefix]\`]

$onlyIf[$checkContains[$message;<@$clientid>;<!@$clientid>]==true;]`
}