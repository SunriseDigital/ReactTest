import Immutable from "immutable";


var list = new Immutable.List([2,3,5,4,1,5,9]);
var target = 5;
list.sort((a, b) => {
  if(a == target){
      return -1
    } else if(b == target) {
      return 1;
    } else {
      return 0;
    }
}).map(x => console.log(x));