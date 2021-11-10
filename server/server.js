const express = require('express')
const server = express()
const port = 4000
server.use(express.json())
/*let axios = require('axios').default*/

const {MongoClient, ObjectId} = require('mongodb')
const clientMongo = new MongoClient("mongodb://localhost:27017/")
clientMongo.connect()


const database = clientMongo.db('LittleBlog')
const posts = database.collection('posts')

server.get('/posts', async (req, res) => {
    const result = await posts.find({}).toArray()
    res.send({result})
})
server.get('/post', async (req, res) => {
    const result = await posts.findOne({_id: ObjectId(req.query.id)})
    res.send(result)
})

server.post('/posts', (req) => {
    posts.insertOne({
        title: req.body.title,
        body: req.body.body,
        comments:[]
    }, () => {
    })
})
server.post('/comments', async (req,res) => {
    posts.updateOne({_id: ObjectId(req.query.id)},{$push:{comments:req.body}},{},() =>{
        res.send({})
    })
})

server.delete('/posts', (req, res) => {
    posts.deleteOne({_id: ObjectId(req.query.id)}, () => {
        res.send({})
    })
})
server.put('/posts', (req, res) => {
    posts.updateOne({_id: ObjectId(req.query.id)}, {$set: {title: req.body.title,body:req.body.body}}, {}, () =>
        res.send({}
        ))
})
server.listen(port)
