import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaService } from 'src/app/busca.service';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  perfil?: Perfil;

  constructor(private buscaService: BuscaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getPerfil(): void {

    const user = (<HTMLInputElement>document.getElementById('pesquisa')).value;
  
    this.buscaService.getPerfil(user)
  
      .subscribe(perfil => this.perfil = perfil);
  
  }

}
