import { InputModel } from './models/input/input.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEntitiesIwe7Inputs } from './reducers/inputs.reducer';
export interface AppSelectorInterface {
    id: string;
    name: string;
}
@Injectable({
    providedIn: 'root'
})
export class AppSelectorService {
    constructor(
        public store: Store<any>
    ) {
    }
    // 获取选择器
    get<T extends InputModel>(id: string): Observable<T> {
        return this.store.select(selectEntitiesIwe7Inputs).pipe(
            map(res => res[id] as T)
        );
    }
}
