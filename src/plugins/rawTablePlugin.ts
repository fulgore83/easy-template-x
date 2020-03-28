import { ScopeData, Tag } from '../compilation';
import { XmlNode } from '../xml';
import { RawTableContent } from './rawTableContent';
import { TemplatePlugin } from './templatePlugin';

export class RawTablePlugin extends TemplatePlugin {

    public readonly contentType = 'rawTable';

    /**
     * Replace the current <w:p> node with the specified xml markup.
     */
    public simpleTagReplacements(tag: Tag, data: ScopeData): void {
        
        const paragrafNode = this.utilities.docxParser.containingParagraphNode(tag.xmlTextNode);

        const value = data.getScopeData<RawTableContent>();
        if (value && typeof value.xml === 'string') {
            const newNode = this.utilities.xmlParser.parse(value.xml);
            XmlNode.insertBefore(newNode, paragrafNode);
        }

        XmlNode.remove(paragrafNode);
    }
}
