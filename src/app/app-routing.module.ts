import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AsideComponent } from './admin/aside/aside.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { MainComponent } from './admin/main/main.component';
import { ProductComponent } from './admin/product/product.component';
import { AppComponent } from './app.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { ClientMainComponent } from './client/client-main/client-main.component';
import { ClientComponent } from './client/client.component';
import { ContentComponent } from './client/gioi-thieu/content/content.component';
import { GioiThieuComponent } from './client/gioi-thieu/gioi-thieu.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientHeaderComponent,
        children: [
          {
            path: '',
            component: ClientMainComponent,
            children: [
              {
                path: '',
                component: ClientFooterComponent
              }
            ]
          }
        ]
      }

    ]
  },
  {
    path: 'gioi-thieu',
    component: GioiThieuComponent,
    children: [
      {
        path: '',
        component: ClientHeaderComponent,
        children: [
          {
            path: '',
            component: ContentComponent,
            children: [
              {
                path: '',
                component: ClientFooterComponent
              }
            ]
          }
        ]
      }
    ]
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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
