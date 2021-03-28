const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  finStr: "",
  getLength() {
    let len = this.arr.length
    return len
  },
  addLink(value) {
    if(typeof value == "undefined")
      value = " "
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position > 0 && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error("Invalid position");
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    this.finStr = this.arr.join('~~')
    this.arr = []
    return this.finStr
  }
};

module.exports = chainMaker;
