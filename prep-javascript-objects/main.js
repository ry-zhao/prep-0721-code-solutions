var person = { firstName: 'Ryan', lastName: 'Zhao', hobby: 'Gaming' };
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
person.job = 'student';
person.previousJob = 'cashier';
console.log("This person's full name is", fullName);
console.log('This person is currently a', person.job);
console.log('Previously, this person worked as a', person.previousJob);
console.log('The complete person object:', person);
