import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Page1Service } from '../../services/page1.service';
import { Publicaciones } from '../../model/publicaciones.model';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  publicacionesList:Array<Publicaciones>;
  
  @Input() publicacion:Publicaciones;

  @Output() deletePublicacionEvent = new EventEmitter<string>();

  constructor(private page1Service:Page1Service) { }


  ngOnInit(): void {
    this.getListPublicaciones();
  }

  removeFromList(key:any){
    this.page1Service.deletePublicacion(key);
  }

  getListPublicaciones(){
      this.page1Service.getPublicacionesList().valueChanges().subscribe(res =>{
        this.publicacionesList=res;
        console.log(res);
    });
  }

  updateActive(isActive:boolean){
    
    //this.page1Service.updatePublicacion(key, {active: isActive}).catch(err => console.log(err))
  }

}
