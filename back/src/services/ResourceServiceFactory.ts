import { ResourceFileService } from "./resource-file.service";
import { ResourceService } from "./resource.service";
import { AbstractResourceService } from "./AbstractResourceService";
import { Resource } from "../interfaces/Resource";
import { ResourceMongoService } from "./resource-mongo.service";

export class ResourceServiceFactory {
  static get<T extends Resource>(
    type: string,
    resourceName: string
  ): AbstractResourceService<T> {
    switch (type) {
      case "ram":
        return new ResourceService<T>();
      case "file":
        return new ResourceFileService<T>(resourceName);
      case "mongodb":
        return new ResourceMongoService<T>(resourceName);
      default:
        throw new Error(
          "Bad type: should be ram, file or mongoDb. Actual value = " + type
        );
    }
  }
}
