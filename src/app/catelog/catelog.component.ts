import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Product {  // Ensure the Product interface is exported
  id: number;
  name: string;
  price: number;
  type: string;
  size: string;
  imgUrl: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.scss']
})
export class CatelogComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, type: 'Type A', size: 'M', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 2, name: 'Product 2', price: 200, type: 'Type B', size: 'L', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 3, name: 'Product 3', price: 150, type: 'Type C', size: 'S', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 4, name: 'Product 4', price: 250, type: 'Type D', size: 'XL', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 5, name: 'Product 5', price: 300, type: 'Type E', size: 'M', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 6, name: 'Product 6', price: 180, type: 'Type F', size: 'L', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 7, name: 'Product 7', price: 220, type: 'Type G', size: 'S', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 8, name: 'Product 8', price: 280, type: 'Type H', size: 'XL', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  cartItems: any[] = [];
  customAlertVisible = false;
  customAlertProduct: Product | undefined;

  constructor(private router: Router) { }

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

  addToCart(product: Product) {
    const uniqueId = `${product.id}-${new Date().getTime()}`;
    const newItem = { ...product, uniqueId, quantity: 1 };

    this.cartItems.push(newItem);
    this.saveCartItems();

    this.customAlertProduct = product;
    this.customAlertVisible = true;
  }

  closeCustomAlert() {
    this.customAlertVisible = false;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
