import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Page404Component } from './componentes/page404/page404.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'inicio-sesion',component:InicioSesionComponent}, 
  {path:'menu',component:MenuComponent},  
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'registro',component:RegistroComponent},
  {path:'**',component:Page404Component,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
