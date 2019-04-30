import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { NewPetComponent } from './home/new-pet/new-pet.component';
import { EditComponent} from './home/edit/edit.component';
const routes: Routes = [
  {  path: 'pet', component: HomeComponent},
  { path: 'pets/:id', component: ReviewComponent},
  { path: 'addpet', component: NewPetComponent},
  { path: 'pet/edit/:id', component: EditComponent},
  { path: '', redirectTo: 'pet', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
