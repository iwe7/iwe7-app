import { selectAllIwe7Inputs } from './../reducers/inputs.reducer';
import { selectAllIwe7Components } from './../reducers/component.reducer';
import { selectIwe7Page } from './../reducers/page.reducer';
import { PlatformModel } from './../models/index';
import { Store, Action } from '@ngrx/store';
import {
    LoadSuccessPlatformAction,
    LoadFailPlatformAction,
    LoadComponentsAction,
    SelectAppPageAction,
    SaveSettingSuccessAction,
    SaveSettingFailAction,
    SaveSettingAction,
    AppActionTypes,
} from './../actions/index';
import { Iwe7Util3Service, Iwe7Response } from 'iwe7-util3';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppActionService } from '../app.action';
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

    @Effect()
    saveSettingAction$: Observable<Action> = this.actions.ofType(AppActionTypes.SaveSettingAction).pipe(
        switchMap((res: SaveSettingAction) => this.store.select(selectIwe7Page).pipe(
            switchMap(page => {
                return this.store.select(selectAllIwe7Components).pipe(
                    switchMap(components => {
                        return this.store.select(selectAllIwe7Inputs).pipe(
                            map(inputs => {
                                components.map(component => {
                                    component.component_inputs = inputs[component.component_id];
                                });
                                return components;
                            })
                        );
                    }),
                    map(components => {
                        page.page_components = components;
                        return page;
                    }),
                );
            }),
            map(page => {
                res.payload = page;
                return res;
            })
        )),
        switchMap(res => this.util.wpost<PlatformModel>(res)),
        map((res: Iwe7Response<any>) => {
            if (res.code === 0) {
                return new SaveSettingSuccessAction(res.data);
            } else {
                return new SaveSettingFailAction(res);
            }
        })
    );

    constructor(
        public actions: Actions,
        public util: Iwe7Util3Service,
        public store: Store<any>,
        public action: AppActionService
    ) {
        this.actions.ofType(AppActionTypes.SelectAppPageAction).subscribe((res: SelectAppPageAction) => {
            this.store.dispatch(new LoadComponentsAction(res.payload.page_components));
        });
        this.action.set('SaveSettingAction', () => {
            return new SaveSettingAction({});
        });
    }
}
