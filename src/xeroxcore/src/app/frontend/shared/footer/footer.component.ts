import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  private subs: Subscription;
  constructor(private router: Router) {
    this.subs = this.router.events.subscribe(url => console.log(url));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
