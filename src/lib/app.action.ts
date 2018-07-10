import { Iwe7EmptyAction } from './actions/index';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action, MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppActionService {
    private map: Map<string, (payload: any) => Action> = new Map();
    constructor(
        public store: Store<any>
    ) { }
    // 注册action
    set(name: string, selector: () => Action): void {
        this.map.set(name, selector);
    }
    // 通过选择器赋值进行操作
    get(name: string, payload: any): Action {
        const selector = this.map.get(name);
        if (selector) {
            return this.map.get(name)(payload);
        } else {
            return new Iwe7EmptyAction();
        }
    }
}
