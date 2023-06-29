export class Profile {

    name: string;
    email: string;
    phone: string;
    pass: string;
  
    constructor(name:string, email:string, phone:string, pass:string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.pass = pass;
    }
  
    public Profile(userInfo: any) {
      this.name = userInfo['firstName'];
      this.email = userInfo['lastName'];
      this.phone = userInfo['opened'];
    }
    
  }
  