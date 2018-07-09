import { EntityState } from '@ngrx/entity';
import { PageModel } from './../page/page.model';

// 应用接口
export interface AppModel {
    app_id?: string;
    // 标题
    app_title?: string;
    app_description?: string;
    app_createtime?: string;
    app_logo?: string;
    app_pages_entity?: EntityState<PageModel>;
    app_pages?: PageModel[];
    uniacid?: string;
}
