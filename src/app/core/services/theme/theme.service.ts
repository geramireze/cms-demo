import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { environment as ENV } from '../../../../environments/environment';
import { MINISTERIO, SitesMock } from '../../../commons/constants/entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENTITY_BRAND } from '../../../../store/states/entity.state';
import { Ministery } from '../../../commons/interface/entity.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private API_URL = ENV.API_URL;
  private http = inject( HttpClient );

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


getEntity(): Observable<any> {
  return this.http.get<any>(`${this.API_URL}/sites/mock/${MINISTERIO}`);
}

private captureDomain(): string {
  const domain = window.location.hostname;
  console.log('Dominio:', domain);
  return domain;
}


  applyTheme(): void {
  //   this.getEntity().subscribe((resp: any) => {
  //     ENTITY_BRAND.set(resp.data)
  //   });
  //   if (isPlatformBrowser(this.platformId)) {
  //     console.log(this.platformId)
  //     this.captureDomain();
  //     const MINISTERY_DATA = ENTITY_BRAND() as Ministery;
  //     document.documentElement.style.setProperty('--brand-gov', `url(${MINISTERY_DATA.brandGov})`);
  //     document.documentElement.style.setProperty('--brand-ministery', `url(${MINISTERY_DATA.brandMinistry})`);
  //     document.documentElement.style.setProperty('--brand-ministeryFull', `url(${MINISTERY_DATA.brandMinistryFull})`);
  //     document.documentElement.style.setProperty('--color-ministery', MINISTERY_DATA.color);
  //     document.documentElement.style.setProperty('--abbr-ministery', MINISTERY_DATA.abbreviation);
  //     document.documentElement.style.setProperty('--name-ministery', MINISTERY_DATA.name);
  //     document.documentElement.style.setProperty('--fullname-ministery', MINISTERY_DATA.fullName);
  //   }
  // }

  if (isPlatformBrowser(this.platformId)) {
    console.log(this.platformId)
    this.captureDomain();
    const MINISTERY_DATA = SitesMock[0] as Ministery;
    document.documentElement.style.setProperty('--brand-gov', `url(${MINISTERY_DATA.brandGov})`);
    document.documentElement.style.setProperty('--brand-ministery', `url(${MINISTERY_DATA.brandMinistry})`);
    document.documentElement.style.setProperty('--brand-ministeryFull', `url(${MINISTERY_DATA.brandMinistryFull})`);
    document.documentElement.style.setProperty('--color-ministery', MINISTERY_DATA.color);
    document.documentElement.style.setProperty('--abbr-ministery', MINISTERY_DATA.abbreviation);
    document.documentElement.style.setProperty('--name-ministery', MINISTERY_DATA.name);
    document.documentElement.style.setProperty('--fullname-ministery', MINISTERY_DATA.fullName);
  }
}

}
