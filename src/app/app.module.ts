import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailListComponent } from './email-list/email-list.component';
import { BottomButtonsComponent } from './bottom-buttons/bottom-buttons.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent,
    BottomButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
