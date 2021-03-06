import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
