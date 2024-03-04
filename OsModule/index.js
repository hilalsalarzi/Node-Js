// Os Module
const os=require('os');
const fs=require('fs');
console.log(os.arch());
const freememory=os.freemem();
console.log(`${freememory/1024/1024/1024}`);
console.log(os.hostname());
// const networkInterfaces=os.networkInterfaces();
// console.log(networkInterfaces);
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.type());
const uptme=os.uptime();
console.log(`${uptme/60/60/24}`);
console.log(os.userInfo());
console.log(os.version());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.loadavg());
console.log(os.totalmem()/1024/1024/1024);

    // fs.writeFile("../PathModule/index.js","// Path Module",(err)=>{     
    //     if(err){
    //         console.log(`There is Error ${err}`);
    //     }
    //     else{
    //         console.log("File is created");
    //     }
    // });