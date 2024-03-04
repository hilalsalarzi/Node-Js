// Os Module
const os=require('os');
console.log(os.arch());
const freememory=os.freemem();
console.log(`${freememory/1024/1024/1024}`);
console.log(os.hostname());
const networkInterfaces=os.networkInterfaces();
console.log(networkInterfaces);
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.type());
const uptme=os.uptime();
console.log(`${uptme/60/60/24}`);