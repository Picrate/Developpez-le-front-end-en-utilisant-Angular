import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * ErrorNotification Observable
 */
export class ErrorNotificationService {

  public notification = new BehaviorSubject<Error>(new Error());

  constructor() { }
}
