import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SliderComponent } from './components/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CreateComponent } from './views/create/create.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
} from '@angular/common/http'
import { FilmsService } from './services/films.service';
import { QueryBuilderService } from './services/query-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    HeaderComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  FilmsService,
  QueryBuilderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
