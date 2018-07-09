import { PlatformModel } from './../models/platform/platform.model';
import { Store, Action } from '@ngrx/store';
import {
    LoadSuccessPlatformAction,
    LoadFailPlatformAction,
    LoadComponentsAction,
    SelectAppPageAction
} from './../actions/index';
import { Iwe7Util3Service, Iwe7Response } from 'iwe7-util3';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AppActionTypes } from '../actions/index';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class AppEffectService {
    @Effect()
    loadPlatform$: Observable<Action> = this.actions.ofType(AppActionTypes.LoadPlatformAction).pipe(
        switchMap(res => this.util.wpost<PlatformModel>(res)),
        map((res: Iwe7Response<any>) => {
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
        this.actions.ofType(AppActionTypes.SelectAppPageAction).subscribe((res: SelectAppPageAction) => {
            this.store.dispatch(new LoadComponentsAction(res.payload.page_components));
        });
    }
}
