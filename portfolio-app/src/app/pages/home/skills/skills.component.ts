import {Component, OnInit} from '@angular/core';
import {AppState} from "../../../app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Skill} from "../../../models/skill.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  shouldShowSkillForm: boolean = false;
  activeSkills: Observable<Skill[]>

  constructor(private store: Store<AppState>) {
    this.activeSkills = store.select('skill')
  }

  ngOnInit(): void {
  }


  openSkillForm() {
    this.shouldShowSkillForm = !this.shouldShowSkillForm;
  }

  calculateStyles(skill: any) {
    return 'width:' + skill['skillRange'] + '%'
  }
}
