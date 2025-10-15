import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TubePvcComponent } from './components/tube-pvc/tube-pvc.component';
import { FeaturesComponent } from './components/features/features.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

const routes: Routes = [
  {
    path:'',
    component:TubePvcComponent 
  },
  {
    path:"featurs",
    component:FeaturesComponent
  },
  {
    path:'presentation',
    component:PresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
