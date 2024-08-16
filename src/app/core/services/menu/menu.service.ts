import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment as ENV } from '../../../../environments/environment';
import { MINISTERIO } from '../../../commons/constants/entity';
import { ENTIYT_MENU } from '../../../../store/states/entity.state';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private API_URL = ENV.API_URL;
  private http = inject( HttpClient );

  constructor() { this.getMenuStore() }

  getMenuId( id: string ) {
    return this.http.get( `${ this.API_URL }/menus/${ id }` );
  }

  getMenuStore() {
    this.getMenuId(MINISTERIO).subscribe( (resp: any) => {
      ENTIYT_MENU.set(resp.data)
    });
  }

}
