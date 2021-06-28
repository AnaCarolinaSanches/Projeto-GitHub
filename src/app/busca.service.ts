import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private perfilUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }

  getPerfis(): Observable<Perfil[]> {

    return this.http.get<Perfil[]>(this.perfilUrl);

  }

  getPerfil(nome: string): Observable<Perfil> {

    const url = `${this.perfilUrl}/${nome}`;

    return this.http.get<Perfil>(url);

  }

}