import { UserService } from '../service/user';
import { inject, injectable } from 'inversify';
import TYPES from '../constant/types';
import md5 from 'md5';
import { User } from '../model/user';

@injectable()
export class Startup {
    constructor(@inject(TYPES.UserService) private userService: UserService) {

    }
    public init(clean = false) {
        let task = Promise.resolve();
        if (clean) {
            task.then(() => {
                return this.userService.removeAll();
            });
        }
        task.then(() => {
            [
                new User('Typescript', 'chuanqigd02@163.com', md5('typescript'), 'admin')
            ].forEach(user => {
                this.userService.getUserByEmail(user.email).then(res => {
                    if (!res) {
                        this.userService.saveUser(user);
                    }
                })
            });
        });

    }
}