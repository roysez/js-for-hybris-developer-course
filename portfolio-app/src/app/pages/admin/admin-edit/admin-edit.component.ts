import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  editForm: FormGroup

  educationGroup = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl('', Validators.maxLength(300))
  });

  experienceGroup = new FormGroup({
    company: new FormControl(''),
    period: new FormControl(''),
    position: new FormControl(''),
    description: new FormControl('', Validators.maxLength(300))
  });

  skillGroup = new FormGroup({
    skill: new FormControl(''),
    level: new FormControl('')
  });

  contactGroup = new FormGroup({
    iconName: new FormControl(''),
    title: new FormControl(''),
    value: new FormControl(''),
    link: new FormControl('')
  });

  feedbackGroup = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    link: new FormControl(''),
    text: new FormControl('', Validators.maxLength(300))
  });

  constructor() {
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      aboutGroup: new FormGroup({
        aboutMe: new FormControl('', Validators.maxLength(300))
      }),
      educations: new FormArray([this.educationGroup]),
      experiences: new FormArray([this.experienceGroup]),
      skills: new FormArray([this.skillGroup]),
      contacts: new FormArray([this.contactGroup]),
      feedbacks: new FormArray([this.feedbackGroup])
    })
  }

  submitEdit() {
    console.log(this.editForm)
  }

  addEducation() {
    let newEducationGroup = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      description: new FormControl('', Validators.maxLength(300))
    });
    (<FormArray>this.editForm.get('educations')).push(newEducationGroup);
  }

  addExperience() {
    let newExpGroup = new FormGroup({
      company: new FormControl(''),
      period: new FormControl(''),
      position: new FormControl(''),
      description: new FormControl('', Validators.maxLength(300))
    });
    (<FormArray>this.editForm.get('experiences')).push(newExpGroup);
  }

  addSkill() {
    let newSkillGroup = new FormGroup({
      skill: new FormControl(''),
      level: new FormControl('')
    });
    (<FormArray>this.editForm.get('skills')).push(newSkillGroup);
  }

  addContact() {
    let newContactGroup = new FormGroup({
      iconName: new FormControl(''),
      title: new FormControl(''),
      value: new FormControl(''),
      link: new FormControl('')
    });
    (<FormArray>this.editForm.get('contacts')).push(newContactGroup);
  }

  addFeedback() {
    let newFeedbackGroup = new FormGroup({
      name: new FormControl(''),
      role: new FormControl(''),
      link: new FormControl(''),
      text: new FormControl('', Validators.maxLength(300))
    });
    (<FormArray>this.editForm.get('feedbacks')).push(newFeedbackGroup);
  }
}
