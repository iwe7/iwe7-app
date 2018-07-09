import { selectIwe7PlatformAppEntity } from './platform.reducer';
import { selectIwe7AppPageEntity } from './app.reducer';
import { selectAllIwe7Components } from './component.reducer';
import { selectAllIwe7Inputs } from './inputs.reducer';
export const iwe7Selector: {
    apps: any;
    pages: any;
    components: any;
    inputs: any;
} = {
    apps: selectIwe7PlatformAppEntity,
    pages: selectIwe7AppPageEntity,
    components: selectAllIwe7Components,
    inputs: selectAllIwe7Inputs
};
