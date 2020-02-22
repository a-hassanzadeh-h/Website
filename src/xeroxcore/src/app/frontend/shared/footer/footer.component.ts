import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  private subs: Subscription;
  constructor() {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
