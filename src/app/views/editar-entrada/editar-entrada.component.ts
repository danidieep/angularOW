import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from 'src/app/share/interfaces/interfaces';
import { EntradaService } from 'src/app/share/services/entrada.service';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css'],
})
export class EditarEntradaComponent implements OnInit {
  public id: number;
  public entrada: Entrada;
  public formEntrada: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private entradaService: EntradaService,
    private router: Router
  ) {
    this.id = 0;
    this.entrada = {
      id: 0,
      title: '',
      body: '',
      autor: '',
      fecha: '',
      userId: 0,
    };
    this.formEntrada = this.fb.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', Validators.required],
      autor: ['', Validators.required],
    });

    this.activatedRoute.params.subscribe((paramsUrl) => {
      this.id = +paramsUrl.id;
    });
  }
  ngOnInit(): void {

    this.recuperarEntrada()
  }

  private recuperarEntrada(): void {
    this.entradaService.recuperarEntrada(this.id).subscribe((data: Entrada) => {
      this.entrada = data;

      this.formEntrada.get('title')?.setValue(this.entrada.title);
      this.formEntrada.get('body')?.setValue(this.entrada.body);
      this.formEntrada.get('fecha')?.setValue(this.entrada.fecha);
      this.formEntrada.get('autor')?.setValue(this.entrada.autor);
    });
  }

  public editarEntrada(): void {
    this.entradaService
      .editarEntrada(this.formEntrada.value)
      .subscribe((data) => {
        console.log('entrada editada: ', data);

        this.router.navigate(['dashboard']);
      });
  }
}
