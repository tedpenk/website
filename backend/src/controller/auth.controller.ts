import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ApiModel, ApiModelProperty, ApiPath, ApiOperationGet, ApiOperationPost, SwaggerDefinitionConstant } from "swagger-express-ts";
@ApiPath({
    path: "/auth",
    name: "auth"
})
@controller("/auth")
export class AuthController implements interfaces.Controller {
    @ApiOperationPost({
        path: "/login",
        description: "用户登录",
        parameters: {
            formData: {
                "email": { type: "string" },
                "password": { type: "string" }
            }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/login")
    public login(req: express.Request, res: express.Response): void {
        const { email, password } = req.params;
        res.send(email + password);
    }

}