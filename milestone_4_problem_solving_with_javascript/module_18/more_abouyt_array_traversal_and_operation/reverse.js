const numbers = [2, 6, 8, 4, 96, 7];
let reversed = [];

for (let i = 0; i < numbers.length; i++) {
  // let number = numbers[i];
  // reversed.unshift(number);
}
// console.log(reversed);

/**
 * using olta method
 */
for (let i = numbers.length - 1; i >= 0; i--) {
  // reversed.push(numbers[i]);
}
// console.log(reversed);

/**
 * using best practice
 */
for (const num of numbers) {
  // reversed.unshift(num);
}
// console.log(reversed);

/**
 * using reverse() method
 */
console.log(numbers);
numbers.reverse();
console.log(numbers);
