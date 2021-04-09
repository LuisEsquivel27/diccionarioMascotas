import { Component, OnInit } from '@angular/core';
import { PeticionesServiceService } from '../../../services/catalogoRequest/peticiones-service.service';
import $ from 'jquery';
declare var $: $;
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html'
})
export class ListaMascotasComponent implements OnInit {

  datosMascota: any[];
  nombreMascota: string;
  imgMascota: string;
  descripcionMascota: string;

  constructor(private servicio: PeticionesServiceService, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.consultaListaCat();
  }

  // tslint:disable-next-line:typedef
  consultaListaCat() {
    this.servicio.consultaInfoCat().subscribe(
      (resp) => {
        const respJson = JSON.stringify(resp);
        this.datosMascota = resp;
        console.log(this.datosMascota);
        setTimeout(() => {
          $('#_modal_please_wait').modal('hide');
        }, 1000);
      }, (error) => {
        console.error('Fallo consulta');
        setTimeout(() => {
          $('#_modal_please_wait').modal('hide');
        }, 1000);
      }
    );
  }

  // tslint:disable-next-line:typedef
  muestraDescripcion(mascota){
    this.nombreMascota = mascota.name;
    this.descripcionMascota = mascota.description;
    this.servicio.detalleMascota.idMascota = mascota.id;
    if (mascota.image !== undefined){
      this.imgMascota = mascota.image.url;
      this.servicio.detalleMascota.imgSrcMascota = mascota.image.url;
    } else {
      this.imgMascota = '';
      this.servicio.detalleMascota.imgSrcMascota = '';
    }
  }
}
