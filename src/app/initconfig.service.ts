import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
