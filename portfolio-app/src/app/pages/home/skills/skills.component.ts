import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../../shared/content.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  shouldShowSkillForm: boolean = false;
  activeSkills = [];

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.activeSkills = this.contentService.getActiveSkills();
  }

  openSkillForm() {
    this.shouldShowSkillForm = !this.shouldShowSkillForm;
  }

  calculateStyles(skill: any) {
    return 'width:' + skill['skillRange'] + '%'
  }
}
