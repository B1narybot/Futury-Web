import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  addToCart(item: any) {
    const currentItems = this.getCartItems();
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // Update quantity if item already exists in the cart
      currentItems[itemIndex].quantity += 1;
    } else {
      // Add new item to the cart
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(item: any) {
    const currentItems = this.getCartItems().filter(cartItem => cartItem.id !== item.id);
    this.cartItemsSubject.next(currentItems);
  }
}
