import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { AppActions, AppActionTypes } from './../actions/index';
import { ComponentModel } from '../models/component/component.model';
import { PageModel } from '../models/page/page.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface State extends PageModel {
    // additional entities state properties
}

export const adapter: EntityAdapter<ComponentModel> = createEntityAdapter<ComponentModel>({
    selectId: (item: ComponentModel) => item.component_id
});

export const initialState: State = {};

export function reducer(
    state = initialState,
    action: AppActions
): State {
    switch (action.type) {
        case AppActionTypes.SelectAppPageAction: {
            if (action.payload) {
                state = { ...state, ...action.payload };
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

const slector = adapter.getSelectors();
export const selectIwe7Page: MemoizedSelector<any, State> = createFeatureSelector('iwe7Page');
