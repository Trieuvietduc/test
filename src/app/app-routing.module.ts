import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DetaiComponent} from './detai/detai.component';
import {ProductFormComponent} from './product-form/product-form.component'
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/:id',
    component: DetaiComponent
  },
  {
    path: 'product/:id/edit',
    component: ProductFormComponent
  },
  {
    path: 'app',
    component:AppComponent
  },
  {
    path: 'student',
    component:StudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
