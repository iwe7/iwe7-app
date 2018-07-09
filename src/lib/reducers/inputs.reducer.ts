import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { InputModel } from './../models/input/input.model';
import { AppActions, AppActionTypes } from '../actions/index';
import { Dictionary } from '@ngrx/entity/src/models';
export interface State extends EntityState<InputModel> {
    // additional entities state properties
}

export const adapter: EntityAdapter<InputModel> = createEntityAdapter<InputModel>({
    selectId: (item: InputModel) => item.id
});

export const initialState: State = adapter.getInitialState({});

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.AddInputAction: {
            if (action.payload) {
                state = adapter.addOne(action.payload, state);
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
export const selectIwe7Component: MemoizedSelector<any, State> = createFeatureSelector('iwe7Inputs');

export const selectAllIwe7Inputs: MemoizedSelector<State, Dictionary<InputModel>> = createSelector(
    selectIwe7Component,
    slector.selectEntities
);
