import { EntityState } from '@ngrx/entity';
import { AppModel } from '../app/app.model';

export interface PlatformGroup {
    credit: string;
    groupid: string;
    isdefault: '1' | '0';
    title: string;
    uniacid: string;
    orderlist: string;
    goods: string;
    one_xiao: string;
    total_xiao: string;
    type: string;
}

export interface PlatformSysinfo {
    MODULE_URL?: string;
    acid: string;
    attachurl: string;
    cookie: {
        pre: string;
    };
    siteroot: string;
    siteurl: string;
    uniacid: string;
}

export interface PlatformModel {
    platform_account?: string;
    platform_creditbehaviors?: {
        activity: string;
        currency: string;
    };
    platform_creditnames?: {
        credit1: {
            title: string;
            enabled: 1 | 0;
        },
        credit2: {
            title: string;
            enabled: 1 | 0;
        },
        credit3: {
            title: string;
            enabled: 1 | 0;
        },
        credit4: {
            title: string;
            enabled: 1 | 0;
        }
        credit5: {
            title: string;
            enabled: 1 | 0;
        }
    };
    platform_groups?: PlatformGroup[];
    platform_jssdkconfig?: any;
    platform_level?: string;
    // 平台名
    platform_logo?: string;
    // 平台图标
    platform_name?: string;
    platform_payment?: { [key: string]: boolean };
    platform_qrcode?: string;
    platform_subscribeurl?: string;
    platform_sysinfo?: PlatformSysinfo;
    // 平台应用
    platform_apps_entity?: EntityState<AppModel>;
    platform_apps?: AppModel[];
}
