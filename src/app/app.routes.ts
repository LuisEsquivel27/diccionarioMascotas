import { InicioHomeComponent } from './home/inicio-home/inicio-home.component';
import { ListaMascotasComponent } from './pages/registroMascotas/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './pages/infoMascota/detalle-mascota/detalle-mascota.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'home', component: InicioHomeComponent},
    {path: 'listaMascotas', component: ListaMascotasComponent},
    {path: 'infoMascota', component: DetalleMascotaComponent},
    {path: '**', component: InicioHomeComponent}
  ];

export class FeautureRoutingModule{}
export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});