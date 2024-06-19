import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  bestSellers: Product[] = [
    { name: 'Product 1', price: 299.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Product 2', price: 399.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Product 3', price: 199.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Product 4', price: 499.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  featuredProducts: Product[] = [
    { name: 'Featured Product 1', price: 299.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Featured Product 2', price: 399.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Featured Product 3', price: 199.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Featured Product 4', price: 299.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Featured Product 5', price: 399.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { name: 'Featured Product 6', price: 199.99, image: 'assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  visibleProducts: Product[] = [];
  scrollPosition = 0;
  itemsPerPage = 3;  // Number of items to show per "page" of the slider
  activeDot = 0;

  ngOnInit(): void {
    this.updateVisibleProducts();
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
}
