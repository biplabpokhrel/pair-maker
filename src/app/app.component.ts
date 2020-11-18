import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ParticipantComponent } from './components/participant/participant.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pair Maker';

  constructor(public dialog: MatDialog) {}
  
  addParticipant() {
    const dialogRef = this.dialog.open(ParticipantComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
