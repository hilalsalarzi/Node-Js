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
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.cpus());
// const cpuslp=os.cpus();
// console.log(cpuslp(1).model);

const cpuslp = os.cpus();
const firstcp=cpuslp[0].model="12 gen";
console.log(firstcp);
// const models = cpuslp.map(cpu1 => cpu1.times.user);
//______________________________________________________________
// const models = cpuslp.map(cpu1 => cpu1.model); // this and below both are same
// const models = cpuslp.map((cpu1) => {
//     return cpu1.model});
// console.log(models);
//___________________above both are same___________________________________________

// console.log(os.homedir());
// console.log(os.loadavg());
// console.log(os.totalmem()/1024/1024/1024);

 
    // fs.mkdir("../ImportExportModule",(err)=>{
    //     if(err){
    //         console.log(`There is Error ${err}`);
    //     }
    //     else{
    //         console.log("Folder is created");
    //     }
    //        fs.writeFile("../ImportExportModule/operator.js","// ImportExportModule",(err)=>{     
    //     if(err){
    //         console.log(`There is Error ${err}`);
    //     }
    //     else{
    //         console.log("File is created");
    //     }
    // });
    // });
          
   
