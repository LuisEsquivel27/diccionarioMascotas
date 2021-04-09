import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlImagenMascota } from '../../interfaces/url-imagen-mascota';

@Injectable({
  providedIn: 'root'
})
export class PeticionesServiceService {

  detalleMascota: UrlImagenMascota = {
    idMascota: '',
    imgSrcMascota: '',
  };

  constructor(private http: HttpClient) { }

  consultaInfoCat(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds');
  }

  consultaDetalleCat(id: string): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds/search?q=' + id);
  }

}
