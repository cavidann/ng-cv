import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { OtherWorksComponent } from './components/other-works/other-works.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', children: [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: ':skip', component: ProjectListComponent }
  ] },
  { path: 'other', children: [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: ':skip', component: OtherWorksComponent }
  ] },
  { path: 'details/l/:id/:skip', component: ProjectDetailsComponent },
  { path: 'details/o/:id/:skip', component: ProjectDetailsComponent },
  // { path: 'details/s/:id/:searchedWord/:skip', component: ProjectDetailsComponent },
  // { path: 'details/:id/s/:skip', component: ProjectDetailsComponent },
  { path: 'search/:work/:skip', component: SearchComponent },
  // { path: 'error', component: NotFoundComponent },
  // { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MdToHtmlPipe,
    ProjectListComponent,
    ProjectDetailsComponent,
    SidemenuComponent,
    NotFoundComponent,
    SearchComponent,
    OtherWorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
