import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainSectionComponent } from './home/main-section/main-section.component';
import { InfoComponent } from './home/info/info.component';
import { ContactComponent } from './contact/contact.component';
import { BaseComponent } from './base/base.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainSectionComponent,
    InfoComponent,
    ContactComponent,
    BaseComponent,
    AboutAuthorComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
