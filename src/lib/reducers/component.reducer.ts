import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComponentModel } from '../models/component/component.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { AppActions, AppActionTypes } from './../actions/index';

export interface State extends EntityState<ComponentModel> {
    // additional entities state properties
}

export const adapter: EntityAdapter<ComponentModel> = createEntityAdapter<ComponentModel>({
    selectId: (item: ComponentModel) => item.component_id
});

export const initialState: State = adapter.getInitialState({});

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.LoadComponentsAction: {
            if (action.payload) {
                state = adapter.addAll(action.payload, state);
                return state;
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

const slector = adapter.getSelectors();
export const selectIwe7Component = createFeatureSelector('iwe7Component');

export const selectAllIwe7Components = createSelector(
    selectIwe7Component,
    slector.selectAll
);
