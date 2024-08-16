import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { HeroComponent } from '../../shared/layouts/hero/hero.component';
import { CardInfoComponent } from '../../shared/components/card-info/card-info.component';
import { ContainerSectionComponent } from '../../shared/components/container-section/container-section.component';
import { CONTENT_DATA } from '../../commons/constants/content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, HeroComponent, CardInfoComponent, ContainerSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data = CONTENT_DATA;

}
