import { ComponentModel } from '../models/component/component.model';
import { PageModel } from '../models/page/page.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends ComponentModel {
    // additional entities state properties
}

export const adapter: EntityAdapter<ComponentModel> = createEntityAdapter<ComponentModel>({
    selectId: (item: ComponentModel) => item.component_id
});

export const initialState: State = {
    component_contents: adapter.getInitialState({})
};

export function reducer(
    state = initialState,
    action: { type: string, payload: any }
): State {
    switch (action.type) {
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
