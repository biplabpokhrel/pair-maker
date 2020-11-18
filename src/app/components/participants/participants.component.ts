import { Component, Input, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  Shuffling = false
  participants: ParticipantModel[] = [];
  @Input() numberOfParticipantInEachGroup = 3;

  constructor(public participantService: ParticipantService) {
    this.participantService.participants$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((participants: ParticipantModel[]) => this.participants = participants)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggle() {
    this.Shuffling = !this.Shuffling;
    if ( this.Shuffling ) {
      this.participantService.participantsGroups = [];
      this.shuffleBegin()
    }
  }

  shuffleBegin(): void {
    interval(200)
    .pipe(
      takeUntil(this.unsubscribe$),
      takeWhile(() => this.Shuffling)
    ).subscribe({
      next : () => this.shuffleParticipants(this.participants),
      complete: () => this.participantService.participantsGroups = this.createGroups(this.participants, this.numberOfParticipantInEachGroup)
    })
  }


  createGroups(participants: ParticipantModel[], numberOfParticipantInEachGroup: number): ParticipantModel[][] {
    const _participants = [ ...participants]
    const groups:  ParticipantModel[][] = [];
    while (_participants.length > 0) {
      groups.push(_participants.splice(0, numberOfParticipantInEachGroup))
    }
    return groups
  }


  shuffleParticipants(participant: ParticipantModel[]) {
    for (let i = participant.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [participant[i], participant[j]] = [participant[j], participant[i]];
    }
    return participant
  }

  
}
