import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  deliveryTime = '0 days';

  constructor() { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }

  saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.uniqueId !== item.uniqueId);
    this.saveCartItems();
  }

  addToCollection(item: any) {
    console.log('Add to collection:', item);
  }

  getTotal() {
    const total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total === 0 ? '00' : total;
  }

  getSubtotal() {
    return this.getTotal();
  }

  updateQuantity(item: any, newQuantity: number) {
    const cartItem = this.cartItems.find(cartItem => cartItem.uniqueId === item.uniqueId);
    if (cartItem) {
      cartItem.quantity = newQuantity;
    }
    this.saveCartItems();
  }

  checkout() {
    console.log('Proceed to checkout');
  }
}
