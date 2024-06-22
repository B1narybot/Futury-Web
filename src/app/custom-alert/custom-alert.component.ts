import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../catelog/catelog.component';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss']
})
export class CustomAlertComponent {
  @Input() product: Product | undefined;
  @Output() close = new EventEmitter<void>();
  @Output() viewCart = new EventEmitter<void>();
  @Output() checkout = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onViewCart() {
    this.viewCart.emit();
  }

  onCheckout() {
    this.checkout.emit();
  }
}
