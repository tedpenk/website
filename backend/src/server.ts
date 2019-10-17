import * as express from 'express';
import middleware from './middleware';
import configData from './config';

import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";
import { UserService } from './service/user';
import TYPES from './constant/types';
import { Startup } from './service/startup';
import { MongoDBClient } from './utils/mongodb/client';
import { MongoDBConnection } from './utils/mongodb/connection';
import { container } from './container';

module.exports = function () {

    MongoDBConnection.getConnection(db => {
        container.get<Startup>(TYPES.Startup).init();
        const server = new InversifyExpressServer(container);
        middleware(server);
        const app = server.build();
        app.listen(configData.port, () => console.log(`Example app listening on port ${configData.port}!`))
    });

}
