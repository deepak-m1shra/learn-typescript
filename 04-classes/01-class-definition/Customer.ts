class Customer {
     
     firstName : string;
     lastName: string;
     private _mobileNumber : string;

     constructor(firstName : string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
     }

     public getFirstName() : string {
        return this.firstName;
     }

     public setFirstName(firstName : string) : void {
        this.firstName = firstName;
     }

     public getLastName() : string {
        return this.lastName;
     }

     public setLastName(lastName : string) : void {
        this.lastName = lastName;
     }

     // Using accessor methods
     public get mobileNumber() {
        return this._mobileNumber;
     }

     public set mobileNumber(value : string) {
        this._mobileNumber = value;
     }
}

let myCustomer = new Customer('Deepak', 'Mishra');

// Used this when there was no constructor defined
// myCustomer.firstName = 'Deepak';
// myCustomer.lastName = 'Mishra';

console.log(`My name is ${myCustomer.firstName} ${myCustomer.lastName}`)

myCustomer.setFirstName('Divit');
myCustomer.setLastName('Mishra');

console.log(`Name using setter and getter methods 
${myCustomer.getFirstName()} ${myCustomer.getLastName()}`)

console.log("Setting mobile number using accessor methods")
myCustomer.mobileNumber = '8888888888'
console.log(`Mobile number is : ${myCustomer.mobileNumber}`)