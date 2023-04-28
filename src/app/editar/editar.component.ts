import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from './Persona';
import { Router } from '@angular/router';
//importamos AppComponent porque desde este archivo vamos a usar su metodo 
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEditados: string;

  constructor(private  EditarService: EditarService,  private router: Router,private c:AppComponent) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){

     this.EditarService.editar(this.pPersona.dni,this.pPersona.informacion).subscribe( 

        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados"

          setTimeout(() =>{
            //c es el nombre que almacena a AppComponent en el constructor
            //donde llamaremos a su metodo mostrardatosdedb()
            //esto hace que se ejecute el codigo dentro de ese metodo
            //y se acutualize lo modificado 
            //que se va a mostrar en la vista HTML
            this.c.mostrardatosdedb();
            
            }, 1000);
 }
 
  
  pdisplayStyle = "block";
  

  closePopup() {
    this.pdisplayStyle = "none";
    this.router.navigate(['/']);
  }

}
