import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TubePvcComponent } from './components/tube-pvc/tube-pvc.component';
import { FeaturesComponent } from './components/features/features.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ContactComponent } from './pages/contact/contact.component';

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
  },
  {
    path:'contact',
    component:ContactComponent
  } 
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) ,
     RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // 👈 ceci fait remonter la page en haut
      anchorScrolling: 'enabled'        // (optionnel) si tu utilises des ancres #id  
    }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
