import { Component, OnInit, Input } from '@angular/core';
import { PeticionesServiceService } from '../../../services/catalogoRequest/peticiones-service.service';
import $ from 'jquery';
declare var $: $;

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html'
})
export class DetalleMascotaComponent implements OnInit {

  nombreMascota = '';
  srcImg = '';
  temperamentMascota = '';
  origenMascota = '';
  vidaMascota = '';
  descripcionMascota = '';
  urlMascota = '';
  tamResp: any;

  constructor(private servicio: PeticionesServiceService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.consultaInfoCat(this.servicio.detalleMascota.idMascota, this.servicio.detalleMascota.imgSrcMascota);
  }

  // tslint:disable-next-line:typedef
  consultaInfoCat(id, url) {
    this.servicio.consultaDetalleCat(id).subscribe(
      (resp) => {
        this.tamResp = resp.length;
        if ( this.tamResp !== 0){
          this.nombreMascota = resp[0].name;
          this.temperamentMascota = resp[0].temperament;
          this.origenMascota = resp[0].origin;
          this.vidaMascota = resp[0].life_span;
          this.descripcionMascota = resp[0].description;
          this.urlMascota = resp[0].wikipedia_url;
          if (url !== ''){
            this.srcImg = url;
          } else {
            this.srcImg = '';
          }
        }
      }, (error) => {
        console.error('Fallo consulta');
      }
    );
  }

  // tslint:disable-next-line:typedef
  modalCarga(){
    $('#_modal_please_wait').modal('show');
  }

}
