import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('cartSection') cartSection!: ElementRef; 
  isCartOpen: boolean = false;

  toggleCartSection() {
    if (this.cartSection) { 
      this.isCartOpen = !this.isCartOpen;
    }
  }
}
