export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password?: string;
  image?: string;
  createdAt?: string;
}

export interface IUserLogin {
  id?: number;
  name: string;
  email: string;
  password: string;
  image?: string;
}

export interface IUserResponse {
  message: string;
  status: number;
  response: IUser;
  error?: any;
}
