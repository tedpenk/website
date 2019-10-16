import { injectable } from 'inversify';

interface IUser {
  nickname: string;
  email: string;
  password: string;
  _id?: string;
  createAt: Date;
  role: 'user' | 'admin';
}

@injectable()
export class User implements IUser {
  constructor(
    public nickname: string,
    public email: string,
    public password: string,
    public role: 'user' | 'admin' = 'user',
    public _id?: string,
    public createAt: Date = new Date(),
  ) { }
}
