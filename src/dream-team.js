const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members == null){
    return false;
  }
  else{
    let arr = []
    for(let i = 0; i < members.length; i++) {
      if(typeof(members[i]) === "string"){
        let temp = ''
        for (let j = 0; j < members[i].length; j++){
          if(members[i][j].match(/^[a-zA-Z\-]+$/)){
            temp+=members[i][j]
          }
          console.log(temp)
        }
        
        arr.push(temp.substring(0,1).toUpperCase())
      }
    }
    arr.sort()
    let answ = ''
    for(let i = 0; i < arr.length; i++) {
      answ+=arr[i]
    }
    return answ
  }
};
