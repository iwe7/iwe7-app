import { PageModel } from './../models/page/page.model';
import { AppModel } from '../models/app/app.model';
import { PlatformModel } from './../models/platform/platform.model';
export class AppActionsConst {
    LoadPlatformAction = 'LoadPlatformAction';
    LoadSuccessPlatformAction = 'LoadSuccessPlatformAction';
    LoadFailPlatformAction = 'LoadFailPlatformAction';
    SelectAppAction = 'SelectAppAction';
    SelectAppPageAction = 'SelectAppPageAction';
    EmptyAction = 'EmptyAction';
}

export const AppActionTypes = new AppActionsConst();
export class EmptyAction {
    type = AppActionTypes.EmptyAction;
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
    | SelectAppAction;
