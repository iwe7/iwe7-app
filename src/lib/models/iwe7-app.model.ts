import * as platform from '../reducers/platform.reducer';
import * as app from '../reducers/app.reducer';
import * as page from '../reducers/page.reducer';
import * as component from '../reducers/component.reducer';

export interface Iwe7ModelState {
    platform: platform.State;
    app: app.State;
    page: page.State;
    component: component.State;
}
