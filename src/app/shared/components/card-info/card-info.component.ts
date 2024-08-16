import { Component, input } from '@angular/core';
import { CARD_TYPE } from './enums/card-info.enums';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {

CardType = input(CARD_TYPE.IMGTOP);

title = input('title');
descripcion =input('descripcion');
img = input('https://cdn.www.gov.co/v5/assets/images/co-colombia.png')

}
