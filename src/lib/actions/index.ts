import { ComponentModel, InputModel, PageModel, AppModel, PlatformModel } from '../models/index';
export class AppActionsConst {
    LoadPlatformAction = 'LoadPlatformAction';
    LoadSuccessPlatformAction = 'LoadSuccessPlatformAction';
    LoadFailPlatformAction = 'LoadFailPlatformAction';
    SelectAppAction = 'SelectAppAction';
    SelectAppPageAction = 'SelectAppPageAction';
    Iwe7EmptyAction = 'Iwe7EmptyAction';
    LoadComponentsAction = 'LoadComponentsAction';
    AddInputAction = 'AddInputAction';
}

export const AppActionTypes = new AppActionsConst();
export class AddInputAction {
    type = AppActionTypes.AddInputAction;
    constructor(public payload: InputModel) { }
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
