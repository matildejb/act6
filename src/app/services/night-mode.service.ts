import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  nightMode: boolean = false; 

 toggleNightMode() {
  this.nightMode = !this.nightMode;

 } 

 isNightMode(){
  return this.nightMode;
 }

}
