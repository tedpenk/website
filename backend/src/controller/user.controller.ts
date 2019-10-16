import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ApiModel, ApiModelProperty, ApiPath, ApiOperationGet, ApiOperationPost, SwaggerDefinitionConstant } from "swagger-express-ts";
import { inject } from "inversify";
import TYPES from "../constant/types";
import { UserService } from "../service/user";
@ApiPath({
    path: "/user",
    name: "user"
})
@controller("/user")
export class UserController implements interfaces.Controller {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }
    @ApiOperationGet({
        path: "/me",
        description: "查询当前用户",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.OBJECT },
            401: { description: "用户没有登录" }
        }
    })
    @httpGet("/me")
    public async  me(req: express.Request, res: express.Response) {
        const user = await this.userService.getUserByID(req.session.userId);
        res.json(user);
    }

}