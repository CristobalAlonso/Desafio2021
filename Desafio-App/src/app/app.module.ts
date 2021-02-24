import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Page2Component } from './component/page2/page2.component';
import { Page1Component } from './component/page1/page1.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(//
      appRoutes,
      { enableTracing:false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
