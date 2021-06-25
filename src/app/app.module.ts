import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { CookieService } from 'ngx-cookie-service';
//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//forms:
import { FormsModule,  ReactiveFormsModule , } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooditemComponent } from './components/fooditem/fooditem.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditemComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,  ReactiveFormsModule 
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
