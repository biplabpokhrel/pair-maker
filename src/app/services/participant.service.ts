import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ParticipantModel } from '../models/participant.model';

@Injectable({providedIn: 'root'})
export class ParticipantService {

  private _participants = new BehaviorSubject<ParticipantModel[]>([]);

  private _participantsGroups = new BehaviorSubject<ParticipantModel[][]>([])

  set participantsGroups(groups: ParticipantModel[][]) {
    this._participantsGroups.next(groups);
  }

  get participantsGroups$(): Observable<ParticipantModel[][]> {
    return this._participantsGroups.asObservable()
  }

  get participants$(): Observable<ParticipantModel[]> {
    return this._participants.asObservable()
  }

  get participants(): ParticipantModel[] {
    return this._participants.value
  }

  addParticipant(participant: ParticipantModel) {
    const _participants = [ ...this.participants ];
    if(participant.id == null) {
      participant.id = `${(new Date().valueOf())}`
    }
    _participants.push(participant);
    this._participants.next(_participants)
  }



}
