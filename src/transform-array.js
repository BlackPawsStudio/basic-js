const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');

  // let stop = false;
  
  // if(Array.isArray(arr)){
  //   if(!(arr.includes("--double-next") || arr.includes("--double-prev") || arr.includes("--discard-next") || arr.includes("--discard-prev"))){
  //     return arr
  //   }
  //   else{
  //     for(let i = 0; i < arr.length; i++) {
  //       console.log(stop, arr)
  //       if(typeof arr[i] == "string" || typeof arr[i] == "number" || typeof arr[i] == "bool") {
  //         if(arr[i]=='--double-prev'){
  //           if(i != 0  && !stop){
  //             arr[i] = arr[i-1]
  //           }
  //           else{
  //             arr.splice(i,1)
  //           }
  //         }
  //         if(arr[i]=='--double-next'){
  //           if(i!=arr.length-1  && !stop){
  //             arr[i] = arr[i+1]
  //           }
  //           else{
  //             arr.splice(i,1)
  //           }
  //         }
  //         if(arr[i]=='--discard-prev'){
  //           if(i > 0 && !stop){
  //             arr.splice(i-1, 1)
  //             arr.splice(i-1, 1)
  //           }
  //           else{
  //             arr.splice(i, 1)
  //           }
  //           stop = true
            
  //           i=i-1
  //         }
  //         if(arr[i]=='--discard-next'){
  //           if(i<arr.length-1 && !stop){
  //             arr.splice(i+1, 1)
              
  //           }
  //           stop = true
  //           arr.splice(i, 1)
  //           i=i-1
  //         }
  //       }
  //       else{
  //         return arr
  //       }
  //     }
  //     return arr
  //   }
  // }
  // else
  //   return 'THROWN'
};