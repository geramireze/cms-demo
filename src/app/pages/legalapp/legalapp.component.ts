import { Component } from '@angular/core';
import { CONTENT_DATA_1 } from '@commons/constants/content';
import { CardInfoComponent } from '@shared/components/card-info/card-info.component';
import { ContainerSectionComponent } from '@shared/components/container-section/container-section.component';
import { HeroComponent } from '@shared/layouts/hero/hero.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';

@Component({
  selector: 'app-legalapp',
  standalone: true,
  imports: [LayoutComponent, HeroComponent, CardInfoComponent, ContainerSectionComponent],
  templateUrl: './legalapp.component.html',
  styleUrl: './legalapp.component.scss'
})
export class LegalappComponent {

  data = CONTENT_DATA_1;

}
