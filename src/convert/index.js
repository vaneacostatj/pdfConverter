//const path = require('path')
//const fs = require('fs').promises
const libre = require('libreoffice-convert')

libre.convertAsync = require('util').promisify(libre.convert)


const main = async (req, res) => {

  try {   
    const  files = req.files
    console.log(files);
    const ext = '.pdf'

    const filesResponse = []

    for ( i = 0; i < files.length; i++) {

      let file = files[i]
      let name = file.originalname.split('.')
      name.pop()
      console.log(name);
      let pdfBuf = await libre.convertAsync(file.buffer, ext, undefined);
      filesResponse.push({file : pdfBuf, originalName: name.join('-')+ext})    
        
    }

    res.status(201).json({files: filesResponse, message: 'ended process'}).end()
    
  } catch (err) {    
  console.log(`Error converting file: ${err}`);
  }
}
 
module.exports = { main }