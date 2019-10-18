import { injectable } from 'inversify';
import { ApiModel } from 'swagger-express-ts';

interface IUser {
  nickname: string;
  email: string;
  password: string;
  _id?: string;
  createAt: Date;
  phone?: string;
  role: 'user' | 'admin';
}

@injectable()
export class User implements IUser {
  constructor(
    public nickname: string,
    public email: string,
    public password: string,
    public role: 'user' | 'admin' = 'user',
    public phone?: string,
    public _id?: string,
    public createAt: Date = new Date(),
  ) { }
}
