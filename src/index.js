'use strict'

const express = require('express');
const config = require('./config')
const api = require('./routes/index')
const cors = require('cors')


const app = express();
app.use(cors())
app.use('/api/v1', api);


const start = (config,(err,res) => {
  if(err){
    return err
  }
  
  app.listen(config.port, ()=>{
    console.log(`server on port: ${config.port}`);
  })
})

start()