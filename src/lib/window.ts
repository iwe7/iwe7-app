

import { Injectable } from '@angular/core';
declare const window: any;
import * as actions from './actions/index';
import * as reducers from './reducers/index';

@Injectable({
    providedIn: 'root',
    useFactory: () => {
        window['WindowService'] = window['WindowService'] || new WindowService();
    }
})
export class WindowService {
    actions = actions;
    reducers = reducers;
    constructor() { }
}
