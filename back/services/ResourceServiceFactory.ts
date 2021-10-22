import { ResourceFileService } from "./resource-file.service";
import { ResourceService } from "./resource.service";
import { AbstractResourceService } from "./AbstractResourceService";
import { Resource } from "../interfaces/Resource";

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
        return new ResourceService<T>();
    }
  }
}
