
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator==undefined)
    options.separator="+";
  if (options.additionSeparator==undefined)
    options.additionSeparator="|";
  function builder(str, num, r){
    let temp=[];
    if (str==="undefined"&&str!=="null") 
      return "";
    if (num==undefined) 
      return str;
    for (let i=0; i< num; i++){
      temp.push(str);
    }
    return temp.join(r);
  }
  let result=builder(str+"",options.repeatTimes,`${builder(options.addition+"",options.additionRepeatTimes,options.additionSeparator)}${options.separator}`)+builder(options.addition+"",options.additionRepeatTimes,options.additionSeparator);
  return result;
};