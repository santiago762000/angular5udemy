import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './extramodules/material/material.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { FavoritesComponent } from './home/favorites/favorites.component';
import { UtcPipe } from './pipes/utc.pipe';
import { CommonDialogComponent } from './dialogs/common-dialog/common-dialog.component';

import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {ErrorService} from './services/error.service';
import { TutorialComponent } from './tutorial/tutorial.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    UtcPipe,
    CommonDialogComponent,
    TutorialComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  entryComponents:[CommonDialogComponent],
  providers: [AuthGuard,AuthService,ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
