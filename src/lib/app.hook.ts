import { AppSelectorService } from './app.selector';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AppActionService } from './app.action';

@Injectable({
    providedIn: 'root'
})
export class AppHookService {
    private map: Map<string, { id: string, name: string, action: string, displayorder: number }[]> = new Map();
    constructor(
        public actions: Actions,
        public action: AppActionService,
        public selector: AppSelectorService
    ) {
        this.actions.subscribe(res => {
            const action = this.map.get(res.type);
            if (action) {
                const newActions = action.sort((a, b) => a.displayorder - b.displayorder);
                newActions.forEach(action => {
                    this.selector.get(action.id).subscribe(res => {
                        if (action.name) {
                            res = res[action.name];
                        }
                        this.action.get(action.action, res);
                    });
                });
            }
        });
    }
    // 注册钩子
    set(name: string, item: { id: string, name: string, action: string, displayorder: number }[]): void {
        this.map.set(name, item);
    }
}
