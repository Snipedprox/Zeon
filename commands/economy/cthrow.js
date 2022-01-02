module.exports = [{
name: "cthrow",
$if: "v4",
code: `
$awaitMessages[$channelId;everyone;3m;free_money;free_money;well nobody claimed L ill be taking that;{}]

**$username threw a <:moneybottle:926954176125231104> in chat that can be worth up to 1,000,000$getServerVar[symbol], type \`free_money\` in chat to claim**
$setGlobalUserVar[bottle;$sub[$getGlobalUserVar[bottle];1]]

$onlyIf[$getGlobalUserVar[bottle]>=1;**You do not own any <:moneybottle:926954176125231104>**]`
} , {
type: "awaited",
name: "free_money",
code: `
**$username claimed the money and got $numberSeparator[$random[100000;1000000];,]$getServerVar[symbol]**
$setGlobalUserVar[cash;$sum[$getGlobaluserVar[cash];$random[100000;1000000]]]`}]