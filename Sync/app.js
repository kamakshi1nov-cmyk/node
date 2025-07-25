//const fs = require('fs')
//const read =fs.readfileSync
//const write = fs.writefileSync 

const {readfileSync ,  writefileSync}= require('fs')
console.logO("i")

const read= readfileSync ('./simple/first.txt','utf-8')
console.log("i")


console.log(read)
writefileSync ('./simple/first.txt','nothing')
