import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  hayError = true;

  inputType = 'password';

  title = 'clase-04-interpolacion-directivas';
  frutas = ['Pera', 'Manzana', 'Mango', { nombre: 'Naranja' }];
  persona = {
    nombre: 'Nicolas',
    apellido: 'Gonzales',
  };

  alternarInputType(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
