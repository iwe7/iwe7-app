import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AppSelectorService {
    private map: Map<string, () => MemoizedSelector<any, any>> = new Map();
    constructor() { }
    // 注册选择器
    set(name: string, selector: () => MemoizedSelector<any, any>): void {
        this.map.set(name, selector);
    }
    // 获取选择器
    get(name: string): MemoizedSelector<any, any> {
        const selector = this.map.get(name);
        if (selector) {
            return selector();
        }
    }
}
