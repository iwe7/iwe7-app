import { PageModel } from '../models/page/page.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AppModel } from '../models/app/app.model';
import * as pageReducer from './page.reducer';

import { AppActionTypes, AppActions } from '../actions/index';

export interface State extends AppModel {
    // additional entities state properties
}

export const adapter: EntityAdapter<PageModel> = createEntityAdapter<PageModel>({
    selectId: (item: PageModel) => item.page_id
});

export const initialState: State = {
    app_pages_entity: adapter.getInitialState({})
};

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.SelectAppAction: {
            if (action.payload) {
                const res = adapter.addAll(action.payload.app_pages, state.app_pages_entity);
                return { ...state, app_pages_entity: res, ...action.payload };
            }
            return state;
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
