import {Skill} from "../models/skill.model";
import {Action} from "@ngrx/store";

export const ADD_SKILL = '[SKILL] Add'
export const REMOVE_SKILL = '[SKILL] Remove'

export class AddSkill implements Action {
  readonly type = ADD_SKILL

  constructor(public payload: Skill) {
  }
}

export class RemoveSkill implements Action {
  readonly type = REMOVE_SKILL

  constructor(public payload: number) {
  }
}


export type Actions = AddSkill | RemoveSkill
