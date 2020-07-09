
var fs = require("fs");

console.log("查看当前目录");
fs.readdir(process.cwd(),function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
