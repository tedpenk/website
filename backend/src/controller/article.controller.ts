import * as express from "express";
import { controller, httpPost, interfaces } from "inversify-express-utils";
import multer from 'multer';
import { ApiOperationPost, ApiPath } from "swagger-express-ts";
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