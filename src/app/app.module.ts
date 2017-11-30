import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PageNotFountComponent } from './error/page-not-fount/page-not-fount.component';

const appRoutes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
  {path: '**', component: PageNotFountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
