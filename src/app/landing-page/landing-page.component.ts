import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  size: string;
  imgUrl: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  bestSellers: Product[] = [
    { id: 1, name: 'Product 1', price: 299.99, type: 'Type A', size: 'M', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 2, name: 'Product 2', price: 399.99, type: 'Type B', size: 'L', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 3, name: 'Product 3', price: 199.99, type: 'Type C', size: 'S', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 4, name: 'Product 4', price: 499.99, type: 'Type D', size: 'XL', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  featuredProducts: Product[] = [
    { id: 5, name: 'Featured Product 1', price: 299.99, type: 'Type E', size: 'M', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 6, name: 'Featured Product 2', price: 399.99, type: 'Type F', size: 'L', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 7, name: 'Featured Product 3', price: 199.99, type: 'Type G', size: 'S', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 8, name: 'Featured Product 4', price: 299.99, type: 'Type H', size: 'XL', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 9, name: 'Featured Product 5', price: 399.99, type: 'Type I', size: 'M', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 10, name: 'Featured Product 6', price: 199.99, type: 'Type J', size: 'L', imgUrl: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  visibleProducts: Product[] = [];
  scrollPosition = 0;
  itemsPerPage = 3;  // Number of items to show per "page" of the slider
  activeDot = 0;

  cartItems: any[] = [];
  customAlertVisible = false;
  customAlertProduct!: Product;

  constructor(private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.updateVisibleProducts();
    this.loadCartItems();
  }

  updateVisibleProducts(): void {
    const start = this.activeDot * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.visibleProducts = this.featuredProducts.slice(start, end);
  }

  scrollLeft(): void {
    if (this.activeDot > 0) {
      this.activeDot--;
    } else {
      this.activeDot = Math.ceil(this.featuredProducts.length / this.itemsPerPage) - 1;
    }
    this.updateVisibleProducts();
  }

  scrollRight(): void {
    if (this.activeDot < Math.ceil(this.featuredProducts.length / this.itemsPerPage) - 1) {
      this.activeDot++;
    } else {
      this.activeDot = 0;
    }
    this.updateVisibleProducts();
  }

  get dots() {
    return Array(Math.ceil(this.featuredProducts.length / this.itemsPerPage)).fill(0).map((_, i) => i);
  }

  setActiveDot(index: number): void {
    this.activeDot = index;
    this.updateVisibleProducts();
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
    this.showCustomAlert(product);
  }

  showCustomAlert(product: Product) {
    this.customAlertProduct = product;
    this.customAlertVisible = true;
    setTimeout(() => this.closeCustomAlert(), 5000); // Auto close after 5 seconds
  }

  closeCustomAlert() {
    this.customAlertVisible = false;
  }

  goToCart() {
    this.router.navigate(['/cart']); // Navigate to cart page
    this.closeCustomAlert();
  }

  goToCheckout() {
    this.router.navigate(['/checkout']); // Navigate to checkout page
    this.closeCustomAlert();
  }
}
