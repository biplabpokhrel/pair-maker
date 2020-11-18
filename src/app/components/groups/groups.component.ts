import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  @Input() participantsGroups: ParticipantModel[][] = []

  constructor(participantService: ParticipantService) {
    participantService.participantsGroups$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((groups: ParticipantModel[][]) => this.participantsGroups = groups)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
