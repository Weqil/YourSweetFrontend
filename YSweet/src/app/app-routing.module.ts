import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CreateComponent } from './views/create/create.component';
import { CategoryCreateComponent } from './views/create/category-create/category-create.component';
import { FilmShowComponent } from './views/film-show/film-show.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'create', component: CreateComponent},
  {path:'create/category',component:CategoryCreateComponent},
  {path: 'create', component: CreateComponent},
  {path:'film/:id', component:FilmShowComponent},
  {path:'**', component:NotFoundComponent },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
