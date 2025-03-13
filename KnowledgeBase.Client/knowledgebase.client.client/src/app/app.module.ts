import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ArticleViewComponent} from './pages/article-view/article-view.component';
import {ArticleEditorComponent} from './pages/article-editor/article-editor.component';
//import {SettingsPageComponent} from '.pages/settings-page/settings-page.component';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticleViewComponent },
  { path: 'edit/:id', component: ArticleEditorComponent }
  //{ path: 'settings', component: SettingsPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticleViewComponent,
    ArticleViewComponent,
    ArticleEditorComponent,
    ArticleEditorComponent,
   // SettingsPageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
