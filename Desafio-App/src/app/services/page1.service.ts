import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Publicaciones } from '../model/publicaciones.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Page1Service {

  private path='/Infromacion/-MUJzq2OXtLFv5Ex5p_v'
  private publicacionRef:AngularFireList<any>;
  publicaciones$: Observable<any[]>;
  publicacionesList: Array<Publicaciones>;
  info;


  constructor(private db: AngularFireDatabase, private http:HttpClient) {
    this.publicacionRef =db.list(this.path)
    
   }

  createMsj(publicacion:Publicaciones):void{
    console.log("service conecta")
    this.publicacionRef.push(publicacion);
  }

  updatePublicacion(key:any, value:any){
    return this.publicacionRef.update(key, value);
  }

  deletePublicacion(key:any): Promise<void> {
    //return this.db.object('/Informacion/'+key).remove();
    return this.publicacionRef.remove(key);  
  }

  getPublicacionesList(){
    return this.publicacionRef
  }

  deleteAll(): Promise<void>{
    return this.publicacionRef.remove();
  }

}
