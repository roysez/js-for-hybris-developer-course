import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public aboutInformation: AboutInformation;
  public activeSkills = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  addAboutInformation(data) {
    console.log(data);
    this.aboutInformation = data;
  }

  getAboutInformation() {
    return this.aboutInformation == undefined ? '' : this.aboutInformation.aboutMe;
  }

  addNewSkill(newSkillValue: Skill) {
    this.activeSkills.push(newSkillValue);
  }

  getActiveSkills() {
    return this.activeSkills;
  }
}

interface AboutInformation {
  aboutMe?: string
}

interface Skill {
  skillName?: string,
  skillRange?: Number
}
