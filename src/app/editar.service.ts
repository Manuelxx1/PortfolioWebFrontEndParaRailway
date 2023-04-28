import { Component, Injectable } from '@angular/core';
//para cnectarnos a un server web con los metodos http
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Persona } from './editar/Persona';



@Injectable({
  providedIn: 'root'
})
export class EditarService {
  
  
  //inyectamos HttpClient para conectarnos via metodos HTTP a un server
  constructor(private http: HttpClient) { 
    console.log('Servicio HTTP');
  }

  
  //metodo Get
  //traer todos
  retornar():Observable<Persona>{
 
   return this.http.get<Persona>("https://portfoliowebbackendrailway-production.up.railway.app/personas/traer");
  }  
  
  //Endpoint del Backend
  //traer por ID
  private backendURL: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/traer";
  obtenerPorId(dni: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.backendURL}/${dni}`);
  } 
  
  //eliminar por ID
  private backendURLEliminar: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/borrar";
  eliminarPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminar}/${dni}`);
  } 
  //eliminar info
  private backendURLEliminarInfo: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/borrarInfo";
  eliminarInfoPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminarInfo}/${dni}`);
  } 
  //eliminar experiencia
  private backendURLEliminarExperiencia: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/borrarExperiencia";
  eliminarExpPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminarExperiencia}/${dni}`);
  } 
  //eliminar educacion
  private backendURLEliminarEducacion: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/borrarEducacion";
  eliminarEducacionPorId(dni: number): Observable<Object>{
    return this.http.delete<Persona>(`${this.backendURLEliminarEducacion}/${dni}`);
  } 
  //para insertar datos a la base de datos 
  //metodo POST
    enviar(pPersona: Persona): Observable<Object>{
      return this.http.post("https://portfoliowebbackendrailway-production.up.railway.app/personas/crear", pPersona);
    }
    //para editar datos de la base de datos 
  //metodo PUT
  private backendURLeditar: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/editarPortfolio";
  editar(dni:number ,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditar}/${dni}`, pPersona);
  }
  //editar experiencia
  private backendURLeditarExperiencia: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/editarPortfolioExperiencia";
  editarExperiencia(dni:number,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditarExperiencia}/${dni}`, pPersona);
  }
  //Editar educacion
  private backendURLeditareditarEducacion: string = "https://portfoliowebbackendrailway-production.up.railway.app/personas/editarPortfolioEducacion";
  editarEducacion(dni:number,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditareditarEducacion}/${dni}`, pPersona);
  }
  
  
    //para login
  //metodo POST
  login(pPersona: Persona): Observable<Object>{
    return this.http.post("https://portfoliowebbackendrailway-production.up.railway.app/login", pPersona);
  }
  
  
  }
  