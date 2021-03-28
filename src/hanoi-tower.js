const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 0;
  for(let i = 0; i < disksNumber; i++) {
    count = count*2+1
  }
  let time = Math.trunc(3600*count/turnsSpeed);
  let obj = {turns: count, seconds: time}
  return obj
};
