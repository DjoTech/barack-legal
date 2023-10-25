import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }



}
