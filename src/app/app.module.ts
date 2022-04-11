import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { AsideComponent } from './admin/aside/aside.component';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { ClientMainComponent } from './client/client-main/client-main.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { GioiThieuComponent } from './client/gioi-thieu/gioi-thieu.component';
import { ContentComponent } from './client/gioi-thieu/content/content.component';
import { ProductComponent } from './admin/product/product.component';
import { MainComponent } from './admin/main/main.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { UserComponent } from './admin/user/user.component';
import { ClientProductComponent } from './client/client-product/client-product.component';
import { DetailComponent } from './client/client-product/detail/detail.component';

import { EditComponent } from './admin/product/edit/edit.component';
import { ListComponent } from './admin/product/list/list.component';
import { AddComponent } from './admin/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { ValidateComponent } from './components/validate/validate.component';
// đc cung cấp để tương tác vs angular
// import {FormsModule} form '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClientComponent,
    AdminComponent,
    AsideComponent,
    ClientHeaderComponent,
    ClientMainComponent,
    ClientFooterComponent,
    GioiThieuComponent,
    ContentComponent,
    ProductComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UserComponent,
    ClientProductComponent,
    DetailComponent,
    EditComponent,
    AddComponent,
    ListComponent,
    StatusComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // import cho các component con sử dụng đc
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
