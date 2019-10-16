import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ApiModel, ApiModelProperty, ApiPath, ApiOperationGet, ApiOperationPost, SwaggerDefinitionConstant } from "swagger-express-ts";
import multer from 'multer';
const uploadTmp = multer({ dest: 'uploads/.tmp' })
@ApiPath({
    path: "/article",
    name: "article",
    security: { basicAuth: [] }
})
@controller("/article")
export class ArticleController implements interfaces.Controller {
    @ApiOperationPost({
        path: "/add",
        description: "新增文章",
        summary: "提交文章",
        parameters: {
            formData: {
                "file": { type: "file" }
            }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/add", uploadTmp.single('file'))
    public postVersion(req: express.Request, response: express.Response): void {

        response.end(req.file.filename);
    }

}