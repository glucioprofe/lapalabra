import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss'],
})
export class CeldaComponent  implements OnInit {
  @Input() palabra!: string
  @Input() letra!: string
  public opcion: string = ''
  public css: string = '' //1. igual Verde. 2. naranja. 3. gris
  constructor() { }

  ngOnInit() {
    return 0
  }
  onComprobar(){
    if(this.opcion==this.letra){
      this.css = 'acierto'
    } else {
      if(this.palabra.includes(this.opcion)){
        this.css = 'casi'
      } else {
        this.css = 'fallo'
      }
    }
  }

}
