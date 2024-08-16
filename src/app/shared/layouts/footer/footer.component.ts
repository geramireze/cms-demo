import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TopBtnComponent } from '../../components/top-btn/top-btn.component';
import { MINISTERIO, SitesMock } from '../../../commons/constants/entity';
import { ENTITY_BRAND } from '../../../../store/states/entity.state';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TopBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public ministry = SitesMock[0];

}
