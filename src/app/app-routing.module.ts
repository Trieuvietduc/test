import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './admin/product/product.component';
import { UserComponent } from './admin/user/user.component';
import { ClientComponent } from './client/client.component';
import { DetailComponent } from './client/detail/detail.component';
import { GioiThieuComponent } from './client/gioi-thieu/gioi-thieu.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: 'gioi-thieu',
    component: GioiThieuComponent,
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
