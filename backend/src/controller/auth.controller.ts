import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ApiModel, ApiModelProperty, ApiPath, ApiOperationGet, ApiOperationPost, SwaggerDefinitionConstant } from "swagger-express-ts";
import { inject } from "inversify";
import TYPES from "../constant/types";
import { UserService } from "../service/user";
@ApiPath({
    path: "/auth",
    name: "auth"
})
@controller("/auth")
export class AuthController implements interfaces.Controller {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }
    @ApiOperationPost({
        path: "/login",
        description: "用户登录",
        consumes: ["application/x-www-form-urlencoded"],
        parameters: {
            formData: {
                "email": { type: "string" },
                "password": { type: "string" }
            }
        },
        responses: {
            200: { description: "用户成功" },
            401: { description: "用户登录失败" }
        }
    })
    @httpPost("/login")
    public async login(req: express.Request, res: express.Response) {
        const { email, password } = req.body;
        const user = await this.userService.getUserByEmailAndPassword(email, password);
        if (!user) {
            res.status(401).end('邮箱或者密码错误');
            return;
        }
        req.session.userId = user._id.toString();
        res.json(user);
    }

}