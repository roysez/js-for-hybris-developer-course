import {Skill} from "../models/skill.model";
import * as SkillActions from './../actions/skill.actions'

const initialState: Skill = {
  name: 'Initial SKill',
  skillRange: 50
}


export function reducer(state: Skill[] = [initialState], action: SkillActions.Actions) {

  switch (action.type) {
    case SkillActions.ADD_SKILL:
      return [...state, action.payload];
    default:
      return state;
  }
}
