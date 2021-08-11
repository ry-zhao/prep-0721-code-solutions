function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers(2, 2):', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var min = convertHoursToMinutes(24);
console.log('convertHoursToMinutes(24):', min);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var world = getGreeting('World');
console.log('getGreeting("World"):', world);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var number = addAndMultiplyBy5(10, 10);
console.log('addAndMultiplyBy5(10, 10):', number);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(100, 75);
console.log('subtractTwoNumbers(100, 75):', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circum = getCircleCircumference(6);
console.log('getCircleCircumference(6):', circum);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Alan', 'Turing');
console.log('getFullName("Alan", "Turing"):', name);

function cube(number) {
  return number * number * number;
}
var twentyseven = cube(3);
console.log('cube(3):', twentyseven);
