import { OnChanges, SimpleChanges } from '@angular/core';
/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbHighlight implements OnChanges {
    parts: string[];
    /**
     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
     */
    highlightClass: string;
    /**
     * The text highlighting is added to.
     *
     * If the `term` is found inside this text, it will be highlighted.
     * If the `term` contains array then all the items from it will be highlighted inside the text.
     */
    result: string;
    /**
     * The term or array of terms to be highlighted.
     * Since version `v4.2.0` term could be a `string[]`
     */
    term: string | readonly string[];
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbHighlight>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbHighlight, "ngb-highlight", never, {
    "highlightClass": "highlightClass";
    "result": "result";
    "term": "term";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmQudHMiLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBoZWxwcyB3aXRoIHRleHQgaGlnaGxpZ2h0aW5nLlxuICpcbiAqIElmIHNwbGl0cyB0aGUgYHJlc3VsdGAgdGV4dCBpbnRvIHBhcnRzIHRoYXQgY29udGFpbiB0aGUgc2VhcmNoZWQgYHRlcm1gIGFuZCBnZW5lcmF0ZXMgdGhlIEhUTUwgbWFya3VwIHRvIHNpbXBsaWZ5XG4gKiBoaWdobGlnaHRpbmc6XG4gKlxuICogRXguIGByZXN1bHQ9XCJBbGFza2FcImAgYW5kIGB0ZXJtPVwiYXNcImAgd2lsbCBwcm9kdWNlIGBBbDxzcGFuIGNsYXNzPVwibmdiLWhpZ2hsaWdodFwiPmFzPC9zcGFuPmthYC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiSGlnaGxpZ2h0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwYXJ0czogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIENTUyBjbGFzcyBmb3IgYDxzcGFuPmAgZWxlbWVudHMgd3JhcHBpbmcgdGhlIGB0ZXJtYCBpbnNpZGUgdGhlIGByZXN1bHRgLlxuICAgICAqL1xuICAgIGhpZ2hsaWdodENsYXNzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgaGlnaGxpZ2h0aW5nIGlzIGFkZGVkIHRvLlxuICAgICAqXG4gICAgICogSWYgdGhlIGB0ZXJtYCBpcyBmb3VuZCBpbnNpZGUgdGhpcyB0ZXh0LCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIElmIHRoZSBgdGVybWAgY29udGFpbnMgYXJyYXkgdGhlbiBhbGwgdGhlIGl0ZW1zIGZyb20gaXQgd2lsbCBiZSBoaWdobGlnaHRlZCBpbnNpZGUgdGhlIHRleHQuXG4gICAgICovXG4gICAgcmVzdWx0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRlcm0gb3IgYXJyYXkgb2YgdGVybXMgdG8gYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICogU2luY2UgdmVyc2lvbiBgdjQuMi4wYCB0ZXJtIGNvdWxkIGJlIGEgYHN0cmluZ1tdYFxuICAgICAqL1xuICAgIHRlcm06IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19