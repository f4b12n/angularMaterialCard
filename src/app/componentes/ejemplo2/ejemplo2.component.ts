import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component} from '../ejemplo1/ejemplo1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
  saludo = "Ejemplo 2 works"
  
  imagenes = [
    "https://media.istockphoto.com/id/1297445091/es/foto/shiba-inu-perro-de-raza-japon%C3%A9s.jpg?s=612x612&w=0&k=20&c=xnpxH__7TbPe4QWJtJ-CbRt7ogkDecwxOW1kb9QE000=",
    "https://www.zooplus.es/magazine/wp-content/uploads/2021/09/Shiba-inu-1.jpg",
    "https://contenthub-static.crypto.com/wp_media/2023/10/WHAT-IS-SHIBA-INU.jpg",
    "https://www.coindesk.com/resizer/cby-7AmuhU_coYGCIk94K8MclIg=/1056x595/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WMXJCFJ3ERCETA6TJNZ5NQPNKA.webp",
  ]
  imagenActual = this.imagenes[0]

  constructor(){}
  ngOnInit(): void {
    console.log('Componente inicializado')
  }
  ngOnDestroy(): void {
    console.log('Componente destruido')
  }

  enviarImagen(indice : number){
    this.imagenActual = this.imagenes[indice]
  } 

  onEmit(mensaje: string){
    this.saludo = mensaje;
  }

}
