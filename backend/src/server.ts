import { InversifyExpressServer } from "inversify-express-utils";
import configData from './config';
import TYPES from './constant/types';
import { container } from './container';
import middleware from './middleware';
import { Startup } from './service/startup';
import { MongoDBConnection } from './utils/mongodb/connection';


module.exports = function () {

    MongoDBConnection.getConnection(db => {
        container.get<Startup>(TYPES.Startup).init();
        const server = new InversifyExpressServer(container);
        middleware(server);
        const app = server.build();
        app.listen(configData.port, () => console.log(`Example app listening on port ${configData.port}!`))
    });

}
