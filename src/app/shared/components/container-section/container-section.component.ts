import { Component, ContentChildren, QueryList, TemplateRef, input } from '@angular/core';

@Component({
  selector: 'app-container-section',
  standalone: true,
  imports: [],
  templateUrl: './container-section.component.html',
  styleUrl: './container-section.component.scss'
})
export class ContainerSectionComponent {
  titleSection = input('title demo');
  @ContentChildren(Component, { read: TemplateRef }) children:
    | QueryList<any>
    | undefined;
}
