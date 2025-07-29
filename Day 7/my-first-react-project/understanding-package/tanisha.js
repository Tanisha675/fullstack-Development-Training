//module is a javascript file which contains function
//we export a module by....module.exports={function names}
//a package is a group of modules -for example react is a package and usestate and useeffect are the modules of react package
const Math =require('./math.js');
console.log("5+3 ="+Math.add(5,3));