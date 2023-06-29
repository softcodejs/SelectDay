import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private error = false;
  private wait = false;
  private alert = false;
  private loading = false;
  message = '';
  goesToNextPath = true;
  escapable = true;
  failedUrl: any;
  imageName: any;
  nextPath: any;
  title: any;
  // showButonOK = false;

  constructor() { }

  isloading$ = new Subject<boolean>();

    show(): void{
        this.isloading$.next(true);
    }
    hide(): void{
        this.isloading$.next(false);
    }

  showBackground() {
    return this.error || this.alert || this.loading;
  }

  showMessage() {
    return this.error || this.alert;
  }

  displayedForWaiting() {
    return this.wait;
  }

  reset() {
    this.setError(false);
    this.setWait(false);
    this.setAlert(false);
    this.setLoading(false);
    this.message = '';
    this.goesToNextPath = true;
    this.escapable = true;
    this.failedUrl = '';
    this.imageName = '';
    this.nextPath = null;
    this.title = '';
  }

  setAlert(showAlert: boolean) {
    this.error = false;
    this.wait = false;
    this.alert = showAlert;
  }

  setError(showError: boolean) {
    this.escapable = showError;
    this.wait = false;
    this.alert = false;
    this.error = showError;

  }

  setWait(showWait: boolean, loading = false) {
    this.error = false;
    this.alert = false;
    this.wait = showWait;
    this.loading = loading;
  }

  getError() {
    return this.error;
  }

  getAlert() {
    return this.alert;
  }

  getWait() {
    return this.wait;
  }

  anyError() {
    return this.showMessage();
  }

  getLoading() {
    return this.loading;
  }

  setLoading(loadin: boolean) {
    this.loading = loadin;
  }

}
