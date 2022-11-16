import { Alert, AlertType } from './alert';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable ({ providedIn: 'root' })

export class AlertService {
    AlertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChange = false;


    constructor(router: Router) {

      router.events.subscribe(event => {
              if(event instanceof NavigationStart) {
                  if(this.keepAfterRouteChange) {
                      this.keepAfterRouteChange = false
                  }
              }else {
                  this.clearImmediate();
              }
      })
    }

    private alert (alertType:AlertType, menssage: string,keepAfterRouteChange: boolean = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.AlertSubject.next(new Alert(alertType, menssage));
    }

    success(menssage: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.SUCCESS, menssage, keepAfterRouteChange);
    }

    warning(menssage: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.WARNING, menssage, keepAfterRouteChange);
    }

    danger(menssage: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.DANGER, menssage, keepAfterRouteChange);
    }

    info(menssage: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.INFO, menssage, keepAfterRouteChange);
    }


    getAlert () {
        return this.AlertSubject.asObservable();
    }
    clearImmediate() {
       this.AlertSubject.next(null);
    }

}
