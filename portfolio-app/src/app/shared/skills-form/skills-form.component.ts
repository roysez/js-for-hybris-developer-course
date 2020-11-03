import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  addSkillForm: FormGroup

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.addSkillForm = new FormGroup({
      skillName: new FormControl('', Validators.maxLength(30)),
      skillRange: new FormControl('', [Validators.max(100), Validators.required])
    });
  }

  submitAddSkillForm() {
    this.contentService.addNewSkill(this.addSkillForm.value);
  }

}
