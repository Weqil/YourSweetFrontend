import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SliderComponent } from './components/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CategoryCreateComponent } from './views/create/category-create/category-create.component';
import { CreateComponent } from './views/create/create.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
} from '@angular/common/http'
import { FilmsService } from './services/films.service';
import { QueryBuilderService } from './services/query-builder.service';
import { CategoriesService } from './services/categories.service';
import { LoaderService } from './services/loader.service';
import { FormsModule,FormGroup,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    HeaderComponent,
    SliderComponent,
    CategoryCreateComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  FilmsService,
  QueryBuilderService,
  CategoriesService,
  LoaderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
