const { MongoClient } = require('mongodb')

//mongodb+srv://mxbk:<password>@cluster0.adcor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const protocol = 'mongodb+srv'
const credentials = 'mxbk:mxbk'
const host = 'cluster0.adcor.mongodb.net'
const options = 'retryWrites=true&w=majority'
const url = `${protocol}://${credentials}@${host}?${options}`
const mongoClient = new MongoClient(url)
console.log("Mongo DB URL: ", mongoClient.s.url)
module.exports=mongoClient