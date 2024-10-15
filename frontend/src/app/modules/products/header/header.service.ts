import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private filterStateSource = new BehaviorSubject<boolean>(true);
  public filterState$ = this.filterStateSource.asObservable();

  public toggleFilterState() {
    this.filterStateSource.next(!this.filterStateSource.getValue());
  }

}
