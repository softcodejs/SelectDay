import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

  constructor(public messageHolder: MessageService, private router: Router) { }

  ngOnInit() {
  }

  loading() {
    return this.messageHolder.getLoading();
  }

  okContinue() {
    if (this.messageHolder.nextPath != null && this.messageHolder.nextPath !== '') {
      this.router.navigate([this.messageHolder.nextPath]);
      this.messageHolder.reset();
    }
    this.messageHolder.reset();
  }

  close() {
    this.messageHolder.reset();
  }

  getImgPlaceholder(event: any) {
    if (this.messageHolder.getWait()) {
      event.target.src = '/app_resources/images/errors/working.png';
    } else if (this.messageHolder.getAlert()) {
      event.target.src = '/app_resources/images/errors/alert.png';
    } else {
      event.target.src = '/app_resources/images/errors/alert.png';
    }
  }

  showButton(): boolean {
    return this.messageHolder.escapable;
  }

}
