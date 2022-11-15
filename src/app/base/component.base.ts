import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export class BaseComponent implements OnDestroy {
  protected readonly subscriptions: Subscription[] = [];

  protected unsubscribeOnDestroy(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
