import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatelogComponent } from './catelog/catelog.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route to HomeComponent
  { path: 'home', component: LandingPageComponent},
  { path: 'catelog', component: CatelogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }  // Wildcard route for handling 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
