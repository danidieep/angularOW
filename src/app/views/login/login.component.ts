import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/share/clases/usuario';
import { LoginService } from 'src/app/share/services/login.service';
import { TokenService } from 'src/app/share/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;

  constructor(private loginService: LoginService, private router: Router, private tokenService:TokenService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {}

  public submit(): void {
    this.loginService.login(this.usuario).subscribe((data: number) => {
      localStorage.setItem('nombreUsuario', this.usuario.nombre);
      this.tokenService.setToken(data)
      this.router.navigate(['/dashboard']);
    });
  }
}
