import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss'],
})
export class CeldaComponent  implements OnInit {
  @Input() palabra!: string
  @Input() letra!: string
  constructor() { }

  ngOnInit() {
    return 0
  }
  onComprobar(event: any){
    console.log(event.key)
  }

}
