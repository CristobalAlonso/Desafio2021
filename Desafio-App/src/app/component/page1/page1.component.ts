import { Component, OnInit } from '@angular/core';
import { Page1Service } from '../../services/page1.service'
import { Publicaciones } from '../../model/publicaciones.model';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  private publicacion = new Publicaciones(); 

  constructor(private page1Service:Page1Service) { }

  ngOnInit(): void {
    //this.createKey();
  }
  
  getTittlekeyup(value:string){
    this.publicacion.titulo=value;
  }
  
  getTextkeyup(value:string){
    this.publicacion.texto=value;
  }

  createKey():void{
    this.page1Service.getPublicacionesList().valueChanges().subscribe(res =>{
      if(res.length<0 || res.length==null){
        this.publicacion.$key='0';
      }else{
        parseInt(this.publicacion.$key, res.length);
        console.log(res.length);
      }
  });
  }

  buttonEvent(){
    this.page1Service.createMsj(this.publicacion);
    //this.page1Service.createMsj(this.publicacion);
  }

}
