# GmapApiExternalLoadkey

 "@agm/core": "^3.0.0-beta.0"
"@types/googlemaps": "3.39.12",


Google Api key is load from external config from api/config ( http-server -o --cors api/config)


Replace with your api key on config.json 
```
{
  "googleApiKey":"REPLACEWITHYOURKEY"
}

```

initconfigService load config file with APP_INITIALIZER 

```


 export function StartupServiceFactory(initconfigService: InitconfigService) {
      return () => initconfigService.load();
    }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot()
  ],
  providers: [
    {
      provide: LAZY_MAPS_API_CONFIG,
      useClass: MapsConfig,
      deps: [InitconfigService]
    },
    { provide: APP_INITIALIZER, useFactory: StartupServiceFactory, deps: [InitconfigService], multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


```

@Injectable({
  providedIn: 'root'
})
export class InitconfigService {
  _config$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
;

  constructor(private http: HttpClient) {

   }

   load(){
     return this.http.get('http://localhost:8080/api/config.json').toPromise().then(
      (data:any) => {
        console.log(data)
        this._config$.next(data)
      }
    )
   }

   getKey(){
     return this._config$.value.googleApiKey
   }

}
```



MapsConfig provide apiKey from config from initconfigService ( provide in appModule )

```
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
```
