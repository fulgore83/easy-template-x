import { ScopeData, Tag } from '../compilation';
import { TemplatePlugin } from './templatePlugin';
export declare class RawTablePlugin extends TemplatePlugin {
    readonly contentType = "rawTable";
    simpleTagReplacements(tag: Tag, data: ScopeData): void;
}
