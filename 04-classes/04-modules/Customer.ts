export class Customer {
     constructor(private _firstName : string, 
                  private _lastName : string){

      }

      setFirstName(firstName :string) {
         this._firstName = firstName
      }

      setLastName(lastName :string) {
         this._lastName = lastName
      }

      get firstName() : string {
         return this._firstName;
      }

      get lastname() : string {
         return this._lastName;
      }
}
