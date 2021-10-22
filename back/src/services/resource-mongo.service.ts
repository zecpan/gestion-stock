import { Resource } from "../interfaces/Resource";
import { MongoClient, Document, ObjectId } from "mongodb";

const uri =
  process.env.GESTION_STOCK_MONGO_URI || "mongodb://localhost/gestion-stock";
const client = new MongoClient(uri);

export class ResourceMongoService<T extends Resource> {
  constructor(protected resourceName: string) {
    this.start();
  }

  async add(resource: T): Promise<T> {
    const result = await client
      .db()
      .collection(this.resourceName)
      .insertOne(resource);
    console.log("result: ", result);
    return resource;
  }

  async removeBulk(ids: string[]): Promise<void> {
    console.log("removeBulk");
    await client
      .db()
      .collection(this.resourceName)
      .deleteMany({ _id: { $in: ids.map((id) => new ObjectId(id)) } });
  }

  async retrieveAll(): Promise<T[]> {
    const resourceList = await client
      .db()
      .collection(this.resourceName)
      .find({})
      .toArray();
    const result = resourceList.map((d) => this.reformatId(d));
    console.log("resourceList: ", resourceList);
    return result;
  }

  async start(): Promise<void> {
    await client.connect();
    const databases = await client.db().admin().listDatabases();
    console.log("databases: ", databases);
  }

  async stop() {
    await client.close();
  }

  private reformatId(d: Document): T {
    const result = { ...d };
    result.id = result._id;
    delete result._id;
    return result as T;
  }
}
