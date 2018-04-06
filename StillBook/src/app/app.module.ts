import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { User } from 'firebase/app';
import { ContextService } from './Services/Context/context.service';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './Pages/main/main.component';
import { LoginComponent } from './Pages/login/login.component';

import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MenuItemComponent } from './Components/menu-item/menu-item.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { ArticleComponent } from './Components/article/article.component';
import { ArticleCommentComponent } from './Components/article/article-comment/article-comment.component';

import { FirebaseDatabase } from './Database/Engine/FirebaseDatabase';

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: 'tos.html',
  credentialHelper: CredentialHelper.AccountChooser
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    ContentComponent,
    ArticleComponent,
    ArticleCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [
    ContextService,
    FirebaseDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
