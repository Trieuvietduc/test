import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { DetaiComponent } from './detai/detai.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http'
// đc cung cấp để tương tác vs angular
// import {FormsModule} form '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent,
    DetaiComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // import cho các component con sử dụng đc
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
