const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
import { Application } from 'express';
import { MongoDBConnection, connStr } from '../utils/mongodb/connection';

export default function sessionStore(app: Application, dev: Boolean) {
    MongoDBConnection.getConnection(db => {
        app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 10 * 365 * 24 * 60 * 60,
                httpOnly: true
            }
        }));
    });

}
