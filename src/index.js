//tests array and returns the number that

var singleNumber = function(nums) {
  let obj = {};
  nums.forEach(function(key) {
    if (!obj[key]) obj[key] = 0;
    obj[key]++;
  });

  for (let keys in obj) {
    if (obj[keys] === 1) {
      return keys;
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1, 2, 2, 2, 3, 3, 3, 5, 1]));
