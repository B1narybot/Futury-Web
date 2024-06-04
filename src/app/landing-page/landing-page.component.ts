import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  bestSellers = [
    {
      name: 'Product 1',
      price: 299.99,
      image: 'assets/images/image1.jpg'
    },
    {
      name: 'Product 2',
      price: 399.99,
      image: 'assets/images/image2.jpg'
    },
    {
      name: 'Product 3',
      price: 199.99,
      image: 'assets/images/image3.jpg'
    },
    {
      name: 'Product 4',
      price: 499.99,
      image: 'assets/images/image4.jpg'
    }
  ];

  featuredProducts = [
    {
      name: 'Featured Product 1',
      price: 299.99,
      image: 'assets/images/featured1.jpg'
    },
    {
      name: 'Featured Product 2',
      price: 399.99,
      image: 'assets/images/featured2.jpg'
    },
    {
      name: 'Featured Product 3',
      price: 199.99,
      image: 'assets/images/featured3.jpg'
    }
  ];

  scrollPosition = 0;
  activeDot = 0;

  scrollLeft() {
    if (this.scrollPosition > 0) {
      this.scrollPosition -= 100;
      this.activeDot--;
    }
  }

  scrollRight() {
    if (this.scrollPosition < 200) { // Assuming each slide moves by 100%
      this.scrollPosition += 100;
      this.activeDot++;
    }
  }

  get dots() {
    return [0, 1, 2]; // Assuming 3 pairs of cards
  }

  get visibleProducts() {
    // Logic to determine which products to display based on scrollPosition
    // Adjust as needed
    return this.featuredProducts.slice(this.activeDot * 3, this.activeDot * 3 + 3);
  }
}
