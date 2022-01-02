module.exports = {
name: "nuke",
code: `
$cloneChannel
$deleteChannel[$channelid]
$image[1;https://tenor.com/view/election-primaries-voting-president-potus-gif-5552569]
$onlyPerms[managemessages;managechannel;{newEmbed: {author: Error occured} {color:RED} {description: $getVar[error] **You are missing the perm \`MANAGE_MESSAGES\`  and \`MANGE_CHANNELS\` **}}]`}
