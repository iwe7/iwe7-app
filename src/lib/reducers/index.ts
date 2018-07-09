import { Iwe7ModelState } from './../models/iwe7-app.model';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as platform from './platform.reducer';
import * as app from './app.reducer';
import * as page from './page.reducer';
import * as component from './component.reducer';


export interface State extends Iwe7ModelState { }

export const reducers: ActionReducerMap<State> = {
    platform: platform.reducer,
    app: app.reducer,
    page: page.reducer,
    component: component.reducer
};


export const iwe7AppState = createFeatureSelector('iwe7App');
export const platformState = (state: Iwe7ModelState) => state.platform;
export const appStateEntitys = (state: Iwe7ModelState) => state.platform.platform_apps_entity.entities;
export const appPageStateEntitys = (state: Iwe7ModelState) => state.app.app_pages_entity.entities;
export const appPageComponentsState = (state: Iwe7ModelState) => state.page.page_components;

const selectPlatform = createSelector(
    iwe7AppState,
    platformState
);

const selectAllApp = createSelector(
    iwe7AppState,
    appStateEntitys
);

const selectAllPages = createSelector(
    iwe7AppState,
    appPageStateEntitys
);

const selectAllComponents = createSelector(
    iwe7AppState,
    appPageComponentsState
);

export const iwe7Selector = {
    platform: selectPlatform,
    apps: selectAllApp,
    pages: selectAllPages,
    components: selectAllComponents
};
