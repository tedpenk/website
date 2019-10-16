import * as express from "express";


import * as swagger from "swagger-express-ts";
import _path from 'path';


export default function (app: express.Application) {
    app.use('/api-docs', express.static(_path.resolve(__dirname, '../../static/swagger')));
    app.use('/api-docs/assets', express.static('node_modules/swagger-ui-dist'));
    app.use(swagger.express(
        {
            definition: {
                info: {
                    title: "My api",
                    version: "1.0"
                },
                externalDocs: {
                    url: "My url"
                }
                // Models can be defined here
            }
        }
    ));
    app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
        console.error(err.stack);
        response.status(500).send("Something broke!");
    });
}