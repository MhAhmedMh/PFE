export class ChangePwdVM{
  constructor(oldPassword:string,newPassword:string,cnewPassword:string) {
       
        this.cnewPassword= cnewPassword;
        this.oldPassword=oldPassword;
        this.newPassword = newPassword;
      }
    public oldPassword:string;
    public newPassword: string;
    public cnewPassword:string;
    
}

