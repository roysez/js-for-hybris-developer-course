import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentService} from "../content.service";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import * as SkillActions from '../../actions/skill.actions';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  addSkillForm: FormGroup

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.addSkillForm = new FormGroup({
      skillName: new FormControl('', Validators.maxLength(30)),
      skillRange: new FormControl('', [Validators.max(100), Validators.required])
    });
  }

  submitAddSkillForm() {
    this.store.dispatch(new SkillActions.AddSkill({
      name: this.addSkillForm.value.skillName,
      skillRange: this.addSkillForm.value.skillRange
    }));
  }

}
