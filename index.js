const fs= require("fs");
const name="Hilal";
console.log(name);
const  line= 23;
// fs.writeFileSync("Read.txt","this is read file");
//  fs.appendFileSync("Read.txt","this is read file 2nd  \n");
//  fs.appendFileSync("Read.txt",`${line}\n`);
// const buf_value=fs.readFileSync("read.txt");
// console.log(buf_value); this will return buffer data
// org_data=buf_value.toString(); //convert buffer data to orignal data
// console.log(org_data); 
// fs.renameSync("read.txt","read-write.txt"); rename the file name'
// fs.mkdirSync("newFolder1");
//  fs.appendFileSync("newFolder/Read.txt","this is read file 2nd  \n");

// const data= fs.readFileSync("read-write.txt","utf8");  //when we write utf8 then it will directly give us readable data.
// console.log(data);
// const newdata=data.toString();
// console.log(newdata);
// fs.renameSync("newFolder/Read.txt","newFolder/mydata.txt");
//   fs.unlinkSync("Read.txt"); // it is deleting the file
// fs.rmdirSync("newFolder"); // it is deleting the folder
// fs.mkdirSync("FsAsync");
// fs.writeFileSync("FsAsync/index.js","// This is Asynchronce");

