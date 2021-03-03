import { Injectable } from '@angular/core';
// import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

@Injectable({
  providedIn: 'root'
})
export class PnotifyService {

  pnotify: any = undefined;

  constructor() {
  }

  getPNotifyAlert = () => {
    return alert;
  }

  notify = (title: string, text: string, type: string): any => {
    this.pnotify = this.getPNotifyAlert();
    this.pnotify.alert({
      title: `${title}`,
      text: `${text}`,
      cornerclass: 'ui-pnotify-sharp',
      type: `${type}`,
      delay: 5000,
    });
  }
}
