import webpack from './webpack';
import path from 'path';
import config from '../config';
import swagger from './swagger';
import '../controller';
import { InversifyExpressServer } from 'inversify-express-utils';
import sessionStore from './session-store';
import bodyParser from 'body-parser';
export default function initMiddleWare(server: InversifyExpressServer) {
    server.setConfig(app => {
        if (!config.backend) {
            app.use(webpack());
            app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../../frontend/src/index.html')));
        }
        swagger(app);
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        sessionStore(app, config.dev)
    });
}

