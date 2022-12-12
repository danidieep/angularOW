import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/share/interfaces/interfaces';
import { EntradaService } from 'src/app/share/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit{
  public listadoEntradas : Entrada[]
  constructor(private entradaService: EntradaService){
    this.listadoEntradas=[]
  }
  ngOnInit(): void {
    this.recuperarEntradas()
  }

  private recuperarEntradas(): void{
    this.entradaService.recuperarEntradas().subscribe(
      (v)=> this.listadoEntradas= v
    );

  }

  public mostrarTitulo(titulo:string) : void{
    console.log(titulo)
    alert(`Entrada seleccionada: ${titulo}.`)
  }
}
