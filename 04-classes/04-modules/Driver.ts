import { Customer } from './Customer'

let myCustomer = new Customer('Deepak', 'Mishra');

// Used this when there was no constructor defined
// myCustomer.firstName = 'Deepak';
// myCustomer.lastName = 'Mishra';

console.log(`My name is ${myCustomer.firstName} ${myCustomer.lastname}`)

myCustomer.setFirstName('Divit');
myCustomer.setLastName('Mishra');

console.log(`Name using setter and getter methods 
${myCustomer.firstName} ${myCustomer.lastname}`)

// console.log("Setting mobile number using accessor methods")
// myCustomer.mobile = '8888888888'
// console.log(`Mobile number is : ${myCustomer.mobileNumber}`)