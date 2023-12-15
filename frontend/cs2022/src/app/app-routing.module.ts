import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/container/components/home/home.component';
import { OrdemCadastroComponent } from './pages/container/components/ordens/components/ordem-cadastro/ordem-cadastro.component';
import { OrdensComponent } from './pages/container/components/ordens/ordens.component';
import { ProdutosComponent } from './pages/container/components/produtos/produtos.component';
import { UsuariosComponent } from './pages/container/components/usuarios/usuarios.component';
import { ContainerComponent } from './pages/container/container.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "ordens",
        component: OrdensComponent,
      },
      {
        path: "ordens/cadastrar",
        component: OrdemCadastroComponent,
      },
      {
        path: "produtos",
        component: ProdutosComponent,
      },
      {
        path: "usuarios",
        component: UsuariosComponent
      },

    ]
  },
  {
    path: "login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['home']); // or redirect to default route
    }
  }
}
