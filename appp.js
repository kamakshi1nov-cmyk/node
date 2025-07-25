
//aSync
const {readFile, writeFile}= require('fs')

readFile ('./simple/first.txt','utf-8',(err,res) =>{
    if(err){
        return
    }
    console.log(res)
})


writeFile ('./simple/first.txt','2nd text',(err,res) =>{
    if(err){
        return
    }
   
})

const {readfileSync ,  writefileSync}= require('fs')
console.logO("1")

const read= readfileSync ('./simple/first.txt','utf-8')
console.log("1")

writefileSync("./simple/first.txt","nothing",{flag:"a"})
