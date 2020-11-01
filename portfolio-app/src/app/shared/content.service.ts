import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public aboutInformation : AboutInformation;

  constructor() {
  }

  addAboutInformation(data) {
    console.log(data);
    this.aboutInformation = data;
  }

  getAboutInformation() {

    return this.aboutInformation == undefined ? '' : this.aboutInformation.aboutMe;
  }
}

interface AboutInformation {
  aboutMe?: string;
}
