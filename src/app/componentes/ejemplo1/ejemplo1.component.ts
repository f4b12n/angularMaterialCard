import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';


interface Persona {
  nombre: string
  imagen: string
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})


export class Ejemplo1Component implements OnChanges {

  ngOnChanges (changes : SimpleChanges) : void {
    window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }

  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter <string>();
  imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg"

  nombre='';
  nombres: Persona[]= [
    {nombre: "Fabian", imagen: 'https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp'}, 
    {nombre: "Rafael", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"}, 
    {nombre: "Yerith", imagen: "https://www.clarin.com/img/2024/04/25/HKCtyMwSF_2000x1500__1.jpg"},
    {nombre: "Miguel", imagen: "https://st3.depositphotos.com/3776273/31936/i/450/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"}]
  
  setName(){
    this.nombre = 'Darth Vader';
  }

  alerta(nombre: string) {
    if (nombre == 'Darth Vader') {
      window.alert('Soy tu padre')
    }
  }

}
