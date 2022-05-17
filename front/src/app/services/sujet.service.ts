import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Sujet } from '../model/sujet';
@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http : HttpClient) { }
  findAll(){
    return this.http.get<Sujet[]>('http://localhost:3000/sujet')
  }
  findById(id : string){
    return this.http.get<Sujet>(`http://localhost:3000/sujet/${id}`)
    
  }
}
