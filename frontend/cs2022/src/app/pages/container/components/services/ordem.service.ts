import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class OrdemService {

  constructor(public http: HttpClient) { }


  apiUrl = environment.apiURL;

  listarOrdens(ano =  null): Observable<any> {
    return this.http.get(this.apiUrl + '/ordem/consultar/' + ano).pipe(
      map((obj) => obj)
    );
  }

  // salvarPeriodo(periodo): Observable<any> {
  //   if (periodo.id_proporcao_alocacao) {
  //     return this.http.post(this.apiUrl + '/proporcao/editar/' + periodo.id_tipo_perfil, periodo).pipe(
  //       map((obj) => obj)
  //     );
  //   } else {
  //     return this.http.post(this.apiUrl + '/proporcao/cadastrar', periodo).pipe(
  //       map((obj) => obj)
  //     );
  //   }
  // }

  }
