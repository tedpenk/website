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
        sessionStore(app, config.dev);
        app.get('/', function (req, res, next) {
            if (req.session.views) {
                req.session.views++
                res.setHeader('Content-Type', 'text/html')
                res.write('<p>views: ' + req.session.views + '</p>')
                res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
                res.end()
            } else {
                req.session.views = 1
                res.end('welcome to the session demo. refresh!')
            }
        });
    });
}

