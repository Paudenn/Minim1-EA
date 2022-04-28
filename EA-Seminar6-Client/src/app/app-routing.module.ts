import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { CrearReportComponent } from './components/crear-report/crear-report.component';
import { ListarReportsComponent } from './components/listar-reports/listar-reports.component';

// Routes
const routes: Routes = [
  { path: '', component: ListarUsersComponent},
  { path: 'crear-user', component: CrearUserComponent},
  { path: 'editar-user/:name', component: CrearUserComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},// In case of a wrong URL, the code redirects to the main path

  { path: 'lista-reports', component: ListarReportsComponent},
  { path: 'crear-report', component: CrearReportComponent},
  { path: 'editar-report/:id', component: CrearReportComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
