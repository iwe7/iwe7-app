import { EntityState } from '@ngrx/entity';
import { ComponentModel } from './../component/component.model';
// 应用页面接口
export interface PageModel {
    page_id?: string;
    page_title?: string;
    app_id?: string;
    page_components_entity?: EntityState<ComponentModel>;
    page_components?: ComponentModel[];
}
