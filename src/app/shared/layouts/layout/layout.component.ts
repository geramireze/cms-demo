import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  input,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { AccesibilityBarComponent } from '../accesibility-bar/accesibility-bar.component';
import { BreadCrumbsComponent } from '../../components/bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    MenuComponent,
    BreadCrumbsComponent,
    AccesibilityBarComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  viewInternal = input.required<boolean>();
    @ContentChildren(Component, { read: TemplateRef }) children:
    | QueryList<any>
    | undefined;
}
