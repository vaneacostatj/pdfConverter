'use strict'
const express = require('express');
const api = express.Router();
const ctrlConvert = require('../convert/index')
const multer  = require('multer')()



api.post('/convert/convert-to-pdf', multer.any(), ctrlConvert.main)

module.exports = api 




 

