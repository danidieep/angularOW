import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/share/interfaces/interfaces';
import { EntradaService } from 'src/app/share/services/entrada.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Atributo
  public listadoEntradas: Entrada[];
  public nombreColumna: Array<string>

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [];
    this.nombreColumna = [ "id", 'titulo', 'autor', 'fecha']
  }

  ngOnInit(): void {

    this.listarEntradas();
  }

  private listarEntradas(): void {

    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = [...entradas];
      }
    )
  }

  

}
