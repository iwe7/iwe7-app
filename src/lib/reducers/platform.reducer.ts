import { AppModel } from './../models/app/app.model';
import { PlatformModel } from './../models/platform/platform.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { AppActionTypes, AppActions } from '../actions/index';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';
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

const slector = adapter.getSelectors();
export const selectIwe7Platform: MemoizedSelector<any, State> = createFeatureSelector('iwe7Platform');

export const selectIwe7PlatformAppEntity: MemoizedSelector<State, Dictionary<AppModel>> = createSelector(
    selectIwe7Platform,
    (state: State) => state.platform_apps_entity.entities
);
