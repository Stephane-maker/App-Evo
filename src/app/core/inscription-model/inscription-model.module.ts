export class InscriptionModelModule {
  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string,
    public name: string,
    public lastName: string,
    public token: string
  ){}
}
