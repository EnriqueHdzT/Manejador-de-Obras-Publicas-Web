import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { IsConceptValidGuard } from './_guards/is-concept-valid.guard';

import { AppComponent } from './app.component';
import { IsLogInComponent } from './is-log-in/is-log-in.component';
import { ToLogInComponent } from './to-log-in/to-log-in.component';
import { GeneralInformationComponent } from './is-log-in/general-information/general-information.component';
import { UpdateFilesComponent } from './is-log-in/update-files/update-files.component';
import { ManageUsersComponent } from './is-log-in/manage-users/manage-users.component';
import { ConceptsComponent } from './is-log-in/concepts/concepts.component';
import { EstimatesComponent } from './is-log-in/estimates/estimates.component';
import { ReportsComponent } from './is-log-in/reports/reports.component';
import { IncidentsComponent } from './is-log-in/incidents/incidents.component';
import { ConceptsOfCertainFrontComponent } from './is-log-in/concepts/concepts-of-certain-front/concepts-of-certain-front.component';

const appRoutes: Routes = [
  { path: '', component: ToLogInComponent },
  {
    path: 'app',
    component: IsLogInComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GeneralInformationComponent,
      },
      {
        path: 'catalogo',
        component: ConceptsComponent,
        children: [
          {
            path: ':id',
            component: ConceptsOfCertainFrontComponent,
            canActivate: [IsConceptValidGuard],
          },
        ],
      },
      {
        path: 'estimaciones',
        component: EstimatesComponent,
      },
      {
        path: 'incidentes',
        component: IncidentsComponent,
      },
      {
        path: 'reportes',
        component: ReportsComponent,
      },
      {
        path: 'archivos',
        component: UpdateFilesComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IsLogInComponent,
    ToLogInComponent,
    GeneralInformationComponent,
    UpdateFilesComponent,
    ManageUsersComponent,
    ConceptsComponent,
    EstimatesComponent,
    ReportsComponent,
    IncidentsComponent,
    ConceptsOfCertainFrontComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
