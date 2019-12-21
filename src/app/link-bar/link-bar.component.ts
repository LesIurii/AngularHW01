import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-bar',
  templateUrl: './link-bar.component.html',
  styleUrls: ['./link-bar.component.scss'],
})
export class LinkBarComponent {
  @Input() title

}

