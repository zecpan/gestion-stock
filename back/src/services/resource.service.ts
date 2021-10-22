import { Resource } from "../interfaces/Resource";

function generateId() {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
}

export class ResourceService<T extends Resource> {
  private resourceList: T[] = [
    { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
    { id: "a2", name: "Pelle", price: 2.4, qty: 120 },
    { id: "a3", name: "Marteau", price: 3, qty: 5 },
    { id: "a4", name: "Pince", price: 235, qty: 1200 },
  ] as unknown[] as T[];

  async add(resource: T): Promise<T> {
    resource.id = generateId();
    this.resourceList.push(resource);
    return resource;
  }

  async removeBulk(ids: string[]): Promise<void> {
    this.resourceList = this.resourceList.filter((r) => !ids.includes(r.id));
  }

  async retrieveAll(): Promise<T[]> {
    return this.resourceList;
  }
}
