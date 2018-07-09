import { AppEffectService } from './effects/index.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as reducer from './reducers/index';

@NgModule({
    imports: [
        StoreModule.forFeature('iwe7App', reducer.reducers),
        EffectsModule.forFeature([AppEffectService])
    ]
})
export class AppStoreModule { }
