import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './admin/add/add.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/product/edit/edit.component';
import { ListComponent } from './admin/product/list/list.component';
import { ProductComponent } from './admin/product/product.component';
import { UserComponent } from './admin/user/user.component';
import { ClientProductComponent } from './client/client-product/client-product.component';
import { DetailComponent } from './client/client-product/detail/detail.component';
import { ClientComponent } from './client/client.component';
import { ContentComponent } from './client/gioi-thieu/content/content.component';
import { GioiThieuComponent } from './client/gioi-thieu/gioi-thieu.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: 'phone',
    component: ClientProductComponent
  },
  {
    path: 'phone/:id/detail',
    component: DetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'phone',
      //   pathMatch: 'full'
      // },
      {
        path: 'phone',
        component: ProductComponent,
        children: [
          {
            path: ':id/edit',
            component: EditComponent,
          },
          {
            path: 'xoa',
            component: ProductComponent,
          }
        ]
      },
      {
        path: 'add',
        component: AddComponent,
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
