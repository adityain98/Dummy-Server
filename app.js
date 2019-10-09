const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Test = require('./models/test')
const port = process.env.PORT || 3000

const app = express()
const mongoAtlas = 'mongodb+srv://indra:Indra880@mycluster-icpdp.gcp.mongodb.net/test?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect(mongoAtlas, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log('masuk');
  })
  .catch(err=>{
    console.log(err);
  })


app.get('/', (req, res, next)=>{
  Test.find()
    .then(tests=>{
      res.status(200).json(tests)
    })
    .catch(next)
})

app.post('/', (req, res, next)=>{
  const {name, email} = req.body
  Test.create({
    name,
    email
  })
    .then(test=>{
      res.status(201).json(test)
    })
    .catch(next)
})

app.get('/test', (req, res, next)=>{
  res.send('test')
})


app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
