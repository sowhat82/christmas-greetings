import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CardComponent } from './components/card.component';
import { Routes, RouterModule } from '@angular/router';
import { GameService } from './game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from './constants';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const ROUTES: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'card', component: CardComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ROUTES, {useHash: true}), //use hash to allow direct routing to other pages in SPA
    ReactiveFormsModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor (private injector: Injector){
    Globals.injector = injector
  }

}
