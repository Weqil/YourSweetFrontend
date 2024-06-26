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
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilmShowComponent } from './views/film-show/film-show.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    CardPreviewComponent,
    HomeComponent,
    FilmShowComponent,
    CreateComponent,
    HeaderComponent,
    SliderComponent,
    CategoryCreateComponent,
    CatalogComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
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
