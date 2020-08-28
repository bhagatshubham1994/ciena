import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ComponentCanDeactivate } from './component-can-deactivate';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<ComponentCanDeactivate>  {

  constructor() { }

  canDeactivate(component: ComponentCanDeactivate): boolean {
   
    if(!component.canDeactivate()){
        if (confirm('Do you want to logout ?')) {
            return true;
        } else {
          return false;
        }
    }
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
