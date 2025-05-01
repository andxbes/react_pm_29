import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
    const id = useAccordionItemContext();
    const { openItemId } = useAccordionContext();
    const isOpen = openItemId === id;
    return <div className={`${className ?? ''} ${isOpen ? 'open' : 'close'}`}>{children}</div>
};
