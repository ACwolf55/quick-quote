const express = require('express')
const app = express()
const path =require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
require("dotenv").config(); 
const {MongoClient} = require('mongodb');
const { MongoURI } = process.env;
const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})


const {PORT} = process.env
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({lmit:'50mb',extended:true}))
app.use(bodyParser.json())
// app.use(express.static('public'))
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}!`))

app.put('/traffic-counter/:app', async(req,res)=>{
  
  const {app}= req.params
  try {
      await client.connect()
      const dbRes = await client.db('quick-quotes').collection('analytics').updateOne( {name:"traffic-counter"},{ $inc: {[`${app}`]: 1,}} )
      console.log(dbRes)
      return res.send(dbRes)
    } catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
})



app.get('/getCard/:organization',async(req,res)=>{
    
    const {organization} = req.params

    try {
        await client.connect()
        const card = await client.db('quick-quotes').collection('vendors').findOne( {organization:organization} )
        console.log(card)
        if(card==null){
          return res.status(409).send('no organization found')
        }else{
        
        return res.send(card.vcf)
        }
      } catch (e){
          console.error(e)
      } finally {
          await client.close()
      }
})



