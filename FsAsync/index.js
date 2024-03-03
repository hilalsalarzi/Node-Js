// This is Asynchronce
const fs=require("fs");
const asynchro="Asynchro";
console.log(asynchro);

// fs.writeFile("read3.txt","Today is awsome day :)",(err)=>{
//     console.log("File is created");
//     console.log(err);
// });

//pro one
// fs.writeFile("read.txt","Today is awsome day :)",()=>{
//     try{
//         erconsole.log("file is created");
//     } 
//     catch(err2){
//         console.log(`error is ${err2}`); // this will return error but the file will still create.
//     }
// });

//append
// fs.appendFile("read.txt","\n Today is awsome day :)",(err)=>{
//     console.log("data has been Written");
  
// });
// this is simple 
// fs.readFile("read.txt","utf8",(err,data)=>{
//     console.log(data);
  
// });
// this is pro 
// const FsFun=()=>{
//  try{
//     fs.rwadFile("read.txt","utf8",(err,data)=>{
//         console.log(data);
      
//     });
// }
//     catch(error1){
//         console.log(`There is Error ${error1}`);

//     }
 
// }
// FsFun();
// console.log("This is last line of code");
//_____________________________________________________________________________________
// const datasync = fs.readFileSync("read.txt","utf8");
// console.log(datasync);
// console.log("This is last line of code of sync");
//_____________the above is the sync it will wait until the first one is finished______
//_____________________________________________________________________________________
//  fs.readFile("read.txt","utf8",(err,data)=>{
//     console.log(data);
// });
// console.log("This is last line of code of async");
//_____the above is Async which will excute code that took less time no matter that requist last___
// fs.readFile("read.txt","utf8",(err,data)=>{
//     if(err){
//         console.error(`There is Error ${err}`);
//     }
//     console.log("this is data",data);
// });

// console.log("This is last line of code of async");
//_____________________________________________________________________________________

// const testmk = () => {
//     try {
//         fs.mkdir("FsAsyncCrud", (err) => {
//              if (err) {
                
//                 console.log(`There is Error ${err}`);
//             } else {
//                 console.log("Folder is created");
//             }
//         }); // Add a comma here
//     } 
//     catch (err2) {
//         console.log(`There is Error6 ${err2}`);
//     }
// };

// testmk();
//______________folder is created_______________________________________________________________________
//create file in folder

// fs.writeFile("FsAsyncCrud/crfile.js","// This is Asynchronce",(err)=>{
//     if(err){
//         console.log(`There is Error ${err}`);
//     }
//     else{
//         console.log("File is created");
//     }
// });
// file is created and data is inserted_______________________________________________________________________

// fs.appendFile("FsAsyncCrud/crfile.js","\n// This is Asynchronce new line",(err)=>{
//     if(err){
//         console.log(`There is Error ${err}`);
//     }
//     else{
//         console.log("Data is inserted ");
//     }
// });
// data is inserted
// fs.readFile("FsAsyncCrud/crfile.js","utf8",(err,data)=>{
//     if(err){
//         console.error(`There is Error ${err}`);
//     }
//     console.log("this is data",data);
// });
//______________Data is Reading successfully_______________________________________________________________________
// fs.rename("FsAsyncCrud/crfile.js","FsAsyncCrud/crfile2.js",(err)=>{
//     if(err){
//         console.log(`There is Error ${err}`);
//     }
//     else{
//         console.log("File is renamed");
//     }
// });
//______________file is Renamed successfully_______________________________________________________________________

// fs.copyFile("FsAsyncCrud/crfile2.js","FsAsyncCrud/crfile3.js",fs.constants.COPYFILE_FICLONE,(err)=>{
//     if(err){
//         console.log(`There is Error ${err}`);
//     }
//     else{
//         console.log("File is copied");
//     }
// });
// fs.unlink("FsAsyncCrud/crfile2.js",(err)=>{
//     if(err){
//         console.log(`There is Error ${err}`);
//     }
//     else{
//         console.log("File is deleted");
//     }
// });
//___________file is been deleted_________________________________________________________________
