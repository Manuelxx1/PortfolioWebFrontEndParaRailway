import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { EditarComponent } from './editar/editar.component';
import { EditarexperiancialaboralComponent } from './editarexperiancialaboral/editarexperiancialaboral.component';
import { EliminarEducacionComponent } from './eliminar-educacion/eliminar-educacion.component';
import { EliminarExperienciaComponent } from './eliminar-experiencia/eliminar-experiencia.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [ { path: "Editar", component: EditarComponent, pathMatch: "full" }, { path: "Eliminar", component: EliminarComponent, pathMatch: "full" },{ path: "editarExperiencialaboral", component: EditarexperiancialaboralComponent, pathMatch: "full" },{ path: "eliminarExperiencialaboral", component: EliminarExperienciaComponent, pathMatch: "full"},{ path: "editarEducacion", component: EditarEducacionComponent, pathMatch: "full"},{ path: "eliminarEducacion", component: EliminarEducacionComponent, pathMatch: "full"},{ path: "ButtonLoginsession", component: FormLoginComponent, pathMatch: "full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
