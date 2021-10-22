import { Resource } from "../interfaces/Resource";

export abstract class AbstractResourceService<T extends Resource> {
  abstract add(resource: T): Promise<T>;

  abstract removeBulk(ids: string[]): Promise<void>;

  abstract retrieveAll(): Promise<T[]>;
}
