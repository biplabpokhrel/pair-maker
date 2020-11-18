import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatLabel,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSpinner,
  MatTabsModule,
  MatToolbarModule, 
  MatTooltipModule} from '@angular/material';
import { ParticipantComponent } from './components/participant/participant.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { FormsModule } from '@angular/forms';
import { GroupsComponent } from './components/groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    ParticipantsComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    FormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ParticipantComponent ]
})
export class AppModule { }
