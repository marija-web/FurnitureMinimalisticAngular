import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'gallery',
    component : GalleryComponent
  },
  {
    path:'contact',
    component : ContactComponent
  },
  {
    path:'aboutAuthor',
    component : AboutAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
