import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardInfoComponent } from '@shared/components/card-info/card-info.component';
import { ContainerSectionComponent } from '@shared/components/container-section/container-section.component';
import { HeroComponent } from '@shared/layouts/hero/hero.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dynamicsite',
  standalone: true,
  imports: [
    LayoutComponent,
    HeroComponent,
    CardInfoComponent,
    ContainerSectionComponent,
    RouterModule
  ],
  templateUrl: './dynamicsite.component.html',
  styleUrl: './dynamicsite.component.scss'
})
export class DynamicsiteComponent  implements OnInit {

  api = inject(ApiService);

  path!: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const path = params['site'];
      console.log(path)
      this.api.getSite(path).subscribe(res => {
        this.path = res.path;
        console.log("data consumido -->",res.path);
      });
    });

  }

}
