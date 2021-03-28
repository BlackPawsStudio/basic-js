const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, maxDepth = 1) {
    arr.forEach((element) => {
      let count = 1;
      if (Array.isArray(element)) {
        count = count + this.calculateDepth(element, count);
        if(maxDepth < count)
          maxDepth = count
      }
    });
    return maxDepth;
  }
};
