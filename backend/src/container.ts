import { Container } from "inversify";
import { UserService } from "./service/user";
import TYPES from "./constant/types";
import { MongoDBClient } from "./utils/mongodb/client";
import { Startup } from "./service/startup";
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import configData from "./config";
export const container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
container.bind<Startup>(TYPES.Startup).to(Startup);
if (configData.dev) {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

