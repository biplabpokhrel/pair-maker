import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantModel } from '../../models/participant.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent {
  
  participant: ParticipantModel = {
    id: null,
    email: "",
    name: ""
  }
  constructor(
    private participantService: ParticipantService,
    @Inject(MAT_DIALOG_DATA) public data: ParticipantModel) {
  }

  get title() {
    return this.data && this.data.id ? "Edit" : "Add"
  }

  save() {
    this.participantService.addParticipant(this.participant)
  }
}
