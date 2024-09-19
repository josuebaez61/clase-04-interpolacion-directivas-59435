import { Component } from '@angular/core';
import { Alumno } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  hayError = true;

  mostrarParrafo = false;

  inputType = 'password';

  title = 'clase-04-interpolacion-directivas';
  frutas = ['Pera', 'Manzana', 'Mango'];
  persona = {
    nombre: 'Nicolas',
    apellido: 'Gonzales',
  };

  alumnos: Alumno[] = [
    {
      nombre: 'Naruto',
      estaAprobado: false,
    },
    {
      nombre: 'Sasuke',
      estaAprobado: true,
    },
    {
      nombre: 'Sakura',
      estaAprobado: true,
    },
  ];

  alternarInputType(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
