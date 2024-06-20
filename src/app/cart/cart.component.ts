import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Replace with your actual cart items type
  deliveryTime = '0 days'; // Example delivery time

  constructor() { }

  ngOnInit(): void {
    // Fetch cart items from a service or local storages
    this.cartItems = this.getCartItems();
  }

  getCartItems() {
    // Implement your logic to get cart items
    return [];
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  addToCollection(item: any) {
    // Implement logic to add item to collection
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
    const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity = newQuantity;
    }
  }
}
