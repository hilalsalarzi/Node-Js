// Path Module
const path=require('path');
console.log(path.basename("C:/Users/hilal/Desktop/node js/index.js"));
console.log(path.dirname("C:/Users/hilal/Desktop/node js/index.js"));
console.log(path.extname("C:/Users/hilal/Desktop/node js/index.js"));
const pob=path.parse("C:/Users/hilal/Desktop/node js/index.js");
console.log(pob);
// const rt=pob.root;
// // console.log(rt);
// pob.root="D:/";
// // console.log(rt);
// console.log(pob);