import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: $;

@Component({
  selector: 'app-inicio-home',
  templateUrl: './inicio-home.component.html'
})
export class InicioHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  modalCarga(){
    $('#_modal_please_wait').modal('show');
  }

}
