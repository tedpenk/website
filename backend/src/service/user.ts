import { inject, injectable } from 'inversify';
import { MongoDBClient } from '../utils/mongodb/client';
import { User } from '../model/user';
import TYPES from '../constant/types';

@injectable()
export class UserService {
  private mongoClient: MongoDBClient;

  constructor(
    @inject(TYPES.MongoDBClient) mongoClient: MongoDBClient
  ) {
    this.mongoClient = mongoClient;
  }

  public getUserByEmail(email: string): Promise<User> {
    return this.mongoClient.find<Array<User>>('user', { email }).then(res => res[0]);
  }

  public removeAll(): Promise<Array<User>> {
    return this.mongoClient.removeAll('user');
  }

  public saveUser(user: User): Promise<User> {
    return this.mongoClient.insert<User>('user', user);
  }
}
