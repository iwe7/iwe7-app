import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { PageModel } from '../models/page/page.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AppModel } from '../models/app/app.model';
import { AppActionTypes, AppActions } from '../actions/index';
import { Dictionary } from '@ngrx/entity/src/models';

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

const slector = adapter.getSelectors();
export const selectIwe7App: MemoizedSelector<any, State> = createFeatureSelector('iwe7App');

export const selectIwe7AppPageEntity: MemoizedSelector<State, Dictionary<PageModel>> = createSelector(
    selectIwe7App,
    (state: State) => state.app_pages_entity.entities
);
