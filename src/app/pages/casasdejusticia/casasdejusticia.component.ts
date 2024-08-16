import { Component } from '@angular/core';
import { CONTENT_DATA_2 } from '@commons/constants/content';
import { CardInfoComponent } from '@shared/components/card-info/card-info.component';
import { ContainerSectionComponent } from '@shared/components/container-section/container-section.component';
import { HeroComponent } from '@shared/layouts/hero/hero.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';

@Component({
  selector: 'app-casasdejusticia',
  standalone: true,
  imports: [LayoutComponent, HeroComponent, CardInfoComponent, ContainerSectionComponent],
  templateUrl: './casasdejusticia.component.html',
  styleUrl: './casasdejusticia.component.scss'
})
export class CasasdejusticiaComponent {

  data = CONTENT_DATA_2;

}
