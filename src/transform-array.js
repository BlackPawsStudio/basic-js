const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  res = []

  if(!Array.isArray(arr))
    throw new Error("")

  if(arr.length == 0){
    return res
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i < arr.length) {
          i++;
          if (arr[i + 1] == "--discard-prev" || arr[i + 1] == "--double-prev") {
            i++;
          }
        }
        break;
      case "--discard-prev":
        if (i != 0) {
          res.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i != 0) {
          res.push(arr[i - 1]);
        }
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res;
};