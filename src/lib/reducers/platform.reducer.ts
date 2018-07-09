import { Iwe7ModelState } from './../models/iwe7-app.model';
import { AppModel } from './../models/app/app.model';
import { PlatformModel } from './../models/platform/platform.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { AppActionTypes, AppActions } from '../actions/index';
export interface State extends PlatformModel {
    // additional entities state properties
}

export const adapter: EntityAdapter<AppModel> = createEntityAdapter<AppModel>({
    selectId: (item: AppModel) => item.app_id
});

export const initialState: State = {
    platform_apps_entity: adapter.getInitialState({})
};

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.LoadSuccessPlatformAction: {
            const res = adapter.addAll(action.payload.platform_apps, state.platform_apps_entity);
            return { ...state, platform_apps_entity: res, ...action.payload };
        }
        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
