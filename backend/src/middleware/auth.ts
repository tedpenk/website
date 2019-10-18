import { Request, Response, NextFunction } from 'express';
import { container } from '../container';
import { UserService } from '../service/user';
import TYPES from '../constant/types';


export default function auth(role: 'user' | 'admin' = 'user') {
    return async (req: Request, res: Response, next: NextFunction) => {
        let userId = req.session.userId;
        if (userId === undefined) {
            res.status(401).end('没有权限,用户未登录');
        } else {
            if (role === 'user') {
                next();
            } else {
                let user = await container.get<UserService>(TYPES.UserService).getUserByID(userId);
                if (user.role === role) {
                    next();
                } else {
                    res.status(401).end('没有权限,当前用户不是管理员');
                }
            }
        }
    }
}

