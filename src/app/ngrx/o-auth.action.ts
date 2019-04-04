import {Action} from '@ngrx/store';

export enum ActionTypes {
  Reset = '[OAuth Component] Reset',
  Update = '[OAuth Component] Update',
  Save = '[OAuth Component] Save',
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
}

export class Save implements Action {
  readonly type = ActionTypes.Save;
}
