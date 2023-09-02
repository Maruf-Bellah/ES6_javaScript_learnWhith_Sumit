var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.filter(function (currentValue, currentIndex, arr) {
  return currentValue >= 5;
});

// console.log(result);

const filter = (array, cb) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(
  filter(numbers, (element, i, arr) => {
    return arr + 5;
  })
);
