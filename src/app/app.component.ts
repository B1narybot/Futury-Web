import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Futury-Web';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Scroll to the top on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }

  onCallToAction() {
    console.log('Call to action button clicked!');
    // You can replace this with your functionality like routing to a new page, making an API call etc.
  }

  toggleTopNav() {
    var x = document.getElementById("myTopnav");
    if (x) { // Check if x is not null
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}
