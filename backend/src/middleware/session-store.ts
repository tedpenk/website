const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
import { Application } from 'express';
import { MongoDBConnection, connStr } from '../utils/mongodb/connection';

export default function sessionStore(app: Application, dev: Boolean) {
    MongoDBConnection.getConnection(db => {
        var sess: any = {

            cookie: {
                maxAge: 10 * 365 * 24 * 60 * 60,
                httpOnly: true
            },
            saveUninitialized: true,
            resave: false, //don't save session if unmodified
            store: new MongoStore({ mongooseConnection: db })
        }

        if (!dev) {
            app.set('trust proxy', 1) // trust first proxy
            sess.cookie.secure = true // serve secure cookies
        }

        app.use(session(sess))
    });
}
