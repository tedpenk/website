import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ApiModel, ApiModelProperty, ApiPath, ApiOperationGet, ApiOperationPost, SwaggerDefinitionConstant } from "swagger-express-ts";

@ApiModel({
    description: "Version description",
    name: "Version"
})
export class VersionModel {
    @ApiModelProperty({
        description: "Id of version",
        required: true,
        example: ['123456789']
    })
    id: number;

    @ApiModelProperty({
        description: "",
        required: true
    })
    name: string;

    @ApiModelProperty({
        description: "Description of version",
        required: true
    })
    description: string;
}

@ApiPath({
    path: "/article",
    name: "article",
    security: { basicAuth: [] }
})
@controller("/article")
export class ArticleController implements interfaces.Controller {
    public static TARGET_NAME: string = "VersionController";

    private data = [{
        id: "1",
        name: "Version 1",
        description: "Description Version 1",
        version: "1.0.0"
    },
    {
        id: "2",
        name: "Version 2",
        description: "Description Version 2",
        version: "2.0.0"
    }];

    @ApiOperationGet({
        description: "Get versions objects list",
        summary: "Get versions list",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "Version" }
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/")
    public getVersions(request: express.Request, response: express.Response, next: express.NextFunction): void {
        response.json(this.data);
    }

    @ApiOperationPost({
        description: "Post version object",
        summary: "Post new version",
        parameters: {
            body: { description: "New version", required: true, model: "Version" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/")
    public postVersion(request: express.Request, response: express.Response, next: express.NextFunction): void {
        if (!request.body) {
            return response.status(400).end();
        }
        this.data.push(request.body);
        response.json(request.body);
    }

}