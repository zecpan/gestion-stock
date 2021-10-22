import { Resource } from "../interfaces/Resource";
import fs from "fs";
import { resolve } from "path";

function generateId() {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
}

export class ResourceFileService<T extends Resource> {
  private resourceList: T[] = [];

  constructor(protected resourceName: string) {
    this.readFile();
  }

  async add(resource: T): Promise<T> {
    resource.id = generateId();
    this.resourceList.push(resource);
    await this.save();
    return resource;
  }

  async removeBulk(ids: string[]): Promise<void> {
    this.resourceList = this.resourceList.filter((r) => !ids.includes(r.id));
    await this.save();
  }

  async retrieveAll(): Promise<T[]> {
    return this.resourceList;
  }

  protected getFilename() {
    return resolve("./data", this.resourceName + ".json");
  }

  protected async readFile() {
    const str = await fs.promises.readFile(this.getFilename(), {
      encoding: "utf-8",
    });
    this.resourceList = JSON.parse(str);
  }

  protected async save() {
    await fs.promises.writeFile(
      this.getFilename(),
      JSON.stringify(this.resourceList)
    );
  }
}
