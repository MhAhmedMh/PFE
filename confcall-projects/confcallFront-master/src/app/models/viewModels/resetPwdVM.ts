export class ResetPwdVM {
  constructor(password: string, token: string) {
    this.newPassword = password;
    this.resetLink = token;
  }
  public newPassword: string;
  public resetLink: string;
}
