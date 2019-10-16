import { Db, ObjectID } from 'mongodb';
import { injectable } from 'inversify';
import { MongoDBConnection } from './connection';

@injectable()
export class MongoDBClient {
  public db: Db;

  constructor() {
    MongoDBConnection.getConnection((connection) => {
      this.db = connection;
    });
  }

  public find<T>(collection: string, filter: Object): Promise<T> {
    return <any>this.db.collection(collection).find(filter).toArray();
  }

  public findOneById<T>(collection: string, objectId: string): Promise<T> {
    return this.db.collection(collection).find({ _id: new ObjectID(objectId) }).limit(1).toArray().then(find => find[0]);
  }

  public insert<T>(collection: string, model: T): Promise<T> {
    return this.db.collection(collection).insertOne(model).then(insert => insert.ops[0]);
  }

  public update<T>(collection: string, objectId: string, model: T): Promise<T> {
    return this.db.collection(collection).updateOne(
      { _id: new ObjectID(objectId) },
      { $set: model },
    ).then(res => model);

  }

  public remove<T>(collection: string, objectId: string): Promise<T> {
    return <any>this.db.collection(collection).deleteOne({ _id: new ObjectID(objectId) });
  }

  public removeAll<T>(collection: string): Promise<T> {
    return <any>this.db.collection(collection).deleteMany({});
  }
}
