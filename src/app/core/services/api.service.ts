import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment as ENV } from '@enviroments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = ENV.API_URL;
  private http = inject( HttpClient );

  constructor() { }

  public getSite(path: string): Observable<any> {
    return this.http.get(`${this.API_URL}/sites/path/${path}`).pipe(
      map((res: any) => res.data)
    );;
  }

}
