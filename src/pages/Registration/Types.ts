export enum RegistrationType {
  SignIn,
}

export interface RegistrationProps {
  type: RegistrationType;
}

export interface SignInFormValues {
  userName: string;
  password: string;
}
