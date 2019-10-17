import session from 'express-session';
import connectMongo from 'connect-mongo';
import { Application } from 'express';
import { MongoDBConnection, connStr, dbName } from '../utils/mongodb/connection';

export default function sessionStore(app: Application, dev: Boolean) {
    const MongoStore = connectMongo(session);
    app.use(session({
        secret: 'keyboard cat',
        cookie: {
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
            httpOnly: true
        },
        store: new MongoStore({
            url: connStr + '/' + dbName
        })
    }));

}
