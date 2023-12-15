import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  public loading = false;
  public loadObservable = new Subject();
  public fullscreen = false;
  constructor() { }

  setLoaded() {

    this.loading = false;
    this.loadObservable.next(this.loading);

  }

  setLoading(fullscreen = false) {
    this.loading = true;
    this.loadObservable.next(this.loading);
    this.fullscreen = fullscreen;
  }
}
