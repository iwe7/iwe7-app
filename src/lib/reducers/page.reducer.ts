import { AppActions, AppActionTypes } from './../actions/index';
import { ComponentModel } from '../models/component/component.model';
import { PageModel } from '../models/page/page.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as componentReducer from './component.reducer';
export interface State extends PageModel {
    // additional entities state properties
}

export const adapter: EntityAdapter<ComponentModel> = createEntityAdapter<ComponentModel>({
    selectId: (item: ComponentModel) => item.component_id
});

export const initialState: State = {
    page_components_entity: adapter.getInitialState({})
};

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.SelectAppPageAction: {
            if (action.payload) {
                const res = adapter.addAll(action.payload.page_components, state.page_components_entity);
                state = { ...state, page_components_entity: res, ...action.payload };
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
