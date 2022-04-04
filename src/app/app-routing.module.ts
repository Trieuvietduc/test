import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/product/add/add.component';
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
    path: 'product',
    component: ClientProductComponent
  },
  {
    path: 'product/detail',
    component: DetailComponent
  },
  {
    path: 'gioi-thieu',
    component: GioiThieuComponent,
  },
  {
    path: 'gioi-thieu/content',
    component: ContentComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'phone',
        pathMatch: 'full'
      },
      {
        path: 'phone',
        component: ProductComponent,
        children: [
          {
            path: 'add',
            component: AddComponent,
          },
        ]
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
