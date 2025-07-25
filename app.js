
//http module

const http = require('http')
const {readFileSync ,  writeFileSync}= require('fs')
const read = readFileSync('./index.html','utf-8')


const server =http.createServer((request,response)=>{
    if(request.url==="/"){
      response.write(read)
      response.end()
    
 }
else{
   response.writeHead(200,{"content-type":"text/html"})
    response.write("<h1> No such page </h1> <a href ="/">back to home </a>")
    response.end()

}

 }
   
    
})
server.listen(5000,()=>{
   console.log("server is running at port 5000")
})
