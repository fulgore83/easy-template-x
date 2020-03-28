import { PluginContent } from './pluginContent';

export interface RawTableContent extends PluginContent {
    _type: 'rawTable';
    xml: string;
}
