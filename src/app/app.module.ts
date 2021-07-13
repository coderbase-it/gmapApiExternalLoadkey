import { AgmCoreModule, LAZY_MAPS_API_CONFIG, MapsAPILoader } from '@agm/core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitconfigService } from './initconfig.service';
import { HttpClientModule} from '@angular/common/http';
import {  MapsConfig } from './mapsconfig.service';



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
