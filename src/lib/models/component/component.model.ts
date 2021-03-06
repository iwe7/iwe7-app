import { EntityState } from '@ngrx/entity';
import { InputModel } from '../input/input.model';
export interface ComponentOutput {
    type: "selector" | "action";
    id?: string;
    name?: string;
}
export interface ComponentModel {
    // 组件编号
    component_id?: string;
    // 标题
    component_title?: string;
    // 显示顺序
    component_displayorder?: string;
    // 对应组件选择器
    component_selector?: string;
    // 输入，一个selector,对应一个store.selector
    component_inputs?: InputModel;
    // 响应时间，响应一个action, 对应一个store.action
    component_outputs?: { [key: string]: ComponentOutput };
    // 方法
    component_methods?: { [key: string]: string };
    // content 内容
    component_contents?: ComponentModel[];
}
