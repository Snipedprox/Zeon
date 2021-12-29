module.exports = {
    Bot: {
    token: process.env.token,
    prefix: ["$getServerVar[prefix]","<@$clientID>","z/"],
    intents: "all",
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./db/",
        tables:["zenon"],
        promisify:false
    },
    respondOnEdit: {
        commands: true
    },
    debug: {
        interpreter : true 
},
    suppressAllErrors: {
        errorMessage: ["", "{newEmbed:{title:Opps!}{description:There is an error!}{color:fcbfcb}}"]
    }
}
}