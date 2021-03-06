import { ComponentModel, InputModel, PageModel, AppModel, PlatformModel } from '../models/index';
import { Update } from '@ngrx/entity';
export class AppActionsConst {
    LoadPlatformAction = 'LoadPlatformAction';
    LoadSuccessPlatformAction = 'LoadSuccessPlatformAction';
    LoadFailPlatformAction = 'LoadFailPlatformAction';
    SelectAppAction = 'SelectAppAction';
    SelectAppPageAction = 'SelectAppPageAction';
    Iwe7EmptyAction = 'Iwe7EmptyAction';
    LoadComponentsAction = 'LoadComponentsAction';
    AddInputAction = 'AddInputAction';
    UpdateInputAction = 'UpdateInputAction';
    SaveSettingAction = 'SaveSettingAction';
    SaveSettingSuccessAction = 'SaveSettingSuccessAction';
    SaveSettingFailAction = 'SaveSettingFailAction';
}

export const AppActionTypes = new AppActionsConst();
export class SaveSettingAction {
    type = AppActionTypes.SaveSettingAction;
    constructor(public payload: any){}
}

export class SaveSettingSuccessAction {
    type = AppActionTypes.SaveSettingSuccessAction;
    constructor(public payload: any) { }
}

export class SaveSettingFailAction {
    type = AppActionTypes.SaveSettingFailAction;
    constructor(public payload: any) { }
}

export class AddInputAction {
    type = AppActionTypes.AddInputAction;
    constructor(public payload: InputModel) { }
}
export class UpdateInputAction {
    type = AppActionTypes.UpdateInputAction;
    constructor(public payload: Update<InputModel>) { }
}
export class LoadComponentsAction {
    type = AppActionTypes.LoadComponentsAction;
    constructor(public payload: ComponentModel[]) { }
}
export class Iwe7EmptyAction {
    type = AppActionTypes.Iwe7EmptyAction;
    constructor() { }
}

export class SelectAppAction {
    type = AppActionTypes.SelectAppAction;
    constructor(public payload: AppModel) { }
}

export class SelectAppPageAction {
    type = AppActionTypes.SelectAppPageAction;
    constructor(public payload: PageModel) { }
}

export class LoadPlatformAction {
    type = AppActionTypes.LoadPlatformAction;
    constructor(public payload: { [key: string]: any }) { }
}

export class LoadSuccessPlatformAction {
    type = AppActionTypes.LoadSuccessPlatformAction;
    constructor(public payload: PlatformModel) { }
}

export class LoadFailPlatformAction {
    type = AppActionTypes.LoadFailPlatformAction;
    constructor(public payload: any) { }
}

export type AppActions =
    LoadPlatformAction
    | LoadSuccessPlatformAction
    | LoadFailPlatformAction
    | SelectAppAction
    | LoadComponentsAction;
