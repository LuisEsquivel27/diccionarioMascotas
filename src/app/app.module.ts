import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InicioHomeComponent } from './home/inicio-home/inicio-home.component';
import { ListaMascotasComponent } from './pages/registroMascotas/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './pages/infoMascota/detalle-mascota/detalle-mascota.component';
import { HeaderComponent } from './header/header/header.component';
import { APP_ROUTES } from './app.routes';
import { PeticionesServiceService } from './services/catalogoRequest/peticiones-service.service';
import { InterceptorService } from './interceptors/interceptor.service';
import { UrlImagenMascota } from './interfaces/url-imagen-mascota';


@NgModule({
  declarations: [
    AppComponent,
    InicioHomeComponent,
    ListaMascotasComponent,
    DetalleMascotaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
  ],
  providers: [PeticionesServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
