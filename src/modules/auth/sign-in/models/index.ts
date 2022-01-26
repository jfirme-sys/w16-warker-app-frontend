export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  user: string;
  token: string;
  status: number;
}