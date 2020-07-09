let file = process.argv[2]
var fs = require('fs');

fs.stat(file, function(err, stat){
    if(stat&&stat.isFile()) {
        let data=fs.readFileSync(file,"utf-8");
        console.log(data);
	    console.log('文件存在');
    } else {
	console.log('文件不存在或不是标准文件');
    }
});
