export enum FormContainerType {
  SignIn,
}

export interface FormContainerProps {
  type: FormContainerType;
}

export interface SignInFormValues {
  email: string;
  password: string;
}
