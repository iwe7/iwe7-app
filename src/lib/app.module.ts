import { AppEffectService } from './effects/index.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as reducer from './reducers/index';
import * as platform from './reducers/platform.reducer';
import * as app from './reducers/app.reducer';
import * as page from './reducers/page.reducer';
import * as component from './reducers/component.reducer';
import * as inputs from './reducers/inputs.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('iwe7Platform', platform.reducer),
        StoreModule.forFeature('iwe7App', app.reducer),
        StoreModule.forFeature('iwe7Page', page.reducer),
        StoreModule.forFeature('iwe7Component', component.reducer),
        StoreModule.forFeature('iwe7Inputs', inputs.reducer),
        EffectsModule.forFeature([AppEffectService])
    ]
})
export class AppStoreModule { }
