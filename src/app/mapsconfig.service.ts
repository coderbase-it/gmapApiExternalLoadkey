import {Injectable} from "@angular/core";
import {LazyMapsAPILoaderConfigLiteral} from "@agm/core";
import { InitconfigService } from "./initconfig.service";


@Injectable()
export class MapsConfig implements LazyMapsAPILoaderConfigLiteral{
  public apiKey: string
  public libraries: string[]
  constructor(private initconfigService: InitconfigService) {
    this.apiKey = this.initconfigService.getKey()
    console.log(this.apiKey)
    this.libraries = ['places']
    console.log("lazy map init with " + this.apiKey)
  }
}
