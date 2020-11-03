import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public aboutInformation: AboutInformation;
  public activeSkills = [];

  constructor() {
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
