import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/spinner.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
