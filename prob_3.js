const transform = (arr, check) => {
  for (let i = 0; i < arr.length; ) {
    if (check(arr[i])) {
      return arr;
    } else {
      arr.shift();
    }
  }
  return arr;
};

console.log(transform([1, 2, 3, 4], n => n >= 3));
console.log(transform([1,2,3,7,4], n => n > 3));
console.log(transform([0,1,0,1], n => n ===1));
console.log(transform([0,1,0,10], n => n ===10));
console.log(transform([1,0,1,0,10], n => n ===0));