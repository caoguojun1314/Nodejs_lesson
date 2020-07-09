//https://baidu.com
//Uniform Resource Locator
//Schema://host:port/path?query#hash

//port: 22 ssh, 80:http 443:https 27017:mongodb
const url = `Schema://host:port/path?query#hash`
const http = require('http')
const server = http.createServer()
server.listen(8808)
//let conter = 0
server.on('request',(req, res) => {
    // console.log(conter++)
    console.log(req.url)
    const url = req.url
    let responseStr
    if (url === '/hello'){
        responseStr = 'hi there'
    }else if(url === '/bye'){
        responseStr ='see u next time'
    }else{
        responseStr = 'i cannot understand what you are saying'
    }
    res.statusCode = 200
    res.end(responseStr)
})