import { PlatformModel } from './../models/platform/platform.model';
import { Store } from '@ngrx/store';
import {
    LoadSuccessPlatformAction,
    LoadFailPlatformAction
} from './../actions/index';
import { Iwe7Util3Service } from 'iwe7-util3';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AppActionTypes } from '../actions/index';
import { switchMap, map } from 'rxjs/operators';
@Injectable()
export class AppEffectService {
    @Effect()
    loadPlatform$ = this.actions.ofType(AppActionTypes.LoadPlatformAction).pipe(
        switchMap(res => this.util.wpost<PlatformModel>(res)),
        map(res => {
            if (res.code === 0) {
                return new LoadSuccessPlatformAction(res.data);
            } else {
                return new LoadFailPlatformAction(res);
            }
        })
    );

    constructor(
        public actions: Actions,
        public util: Iwe7Util3Service,
        public store: Store<any>
    ) {

    }
}
