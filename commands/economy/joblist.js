module.exports = {
name: "joblist",
aliases: ['job','jobs'],
code: `
$title[1;**job list**]
$color[1;$getVar[color]]
$description[1;
**" here you can apply for a job and earn money you can apply for a job by doing \`$getServerVar[prefix]apply < job >\` not that hard "**

:man_superhero: **[White hat]($getVar[support])**
**ID:** \`white\`
**Salary:** \`2K\`
**Command requirement:** \`50\`

:man_supervillain: **[Black hat]($getVar[support])**
**ID:** \`black\`
**Salary:** \`10k\`
**Command requirement:** \`100\`

:man_detective: **[Grey hat]($getVar[support])**
**ID:** \`grey\`
**Salary:** \`15k\`
**Command requirement:** \`500\`]
$setGlobalUserVar[cmd;$sum[$getGlobalUserVar[cmd];1]]

$globalCooldown[$getGlobalUserVar[cooldown];{newEmbed: {color:$getVar[color]} {description:**Take a chill pill fr bro wait %time%**}}]`}