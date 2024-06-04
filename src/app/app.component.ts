import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Futury-Web';

  onCallToAction() {
    console.log('Call to action button clicked!');
    // You can replace this with your functionality like routing to a new page, making an API call etc.
  }

  // Add your existing logic for the top navigation bar functionality here (optional)

  // Example logic (not tested):
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
