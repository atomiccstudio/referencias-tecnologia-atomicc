import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgbPaginationConfig } from './pagination-config';
/**
 * A context for the
 * * `NgbPaginationFirst`
 * * `NgbPaginationPrevious`
 * * `NgbPaginationNext`
 * * `NgbPaginationLast`
 * * `NgbPaginationEllipsis`
 *
 * link templates in case you want to override one.
 *
 * @since 4.1.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbPaginationLinkContext {
    /**
     * The currently selected page number
     */
    currentPage: number;
    /**
     * If `true`, the current link is disabled
     */
    disabled: boolean;
}
/**
 * A context for the `NgbPaginationNumber` link template in case you want to override one.
 *
 * Extends `NgbPaginationLinkContext`.
 *
 * @since 4.1.0
 */
export interface NgbPaginationNumberContext extends NgbPaginationLinkContext {
    /**
     * The page number, displayed by the current page link.
     */
    $implicit: number;
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationEllipsis {
    templateRef: TemplateRef<NgbPaginationLinkContext>;
    constructor(templateRef: TemplateRef<NgbPaginationLinkContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationEllipsis>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationEllipsis, "ng-template[ngbPaginationEllipsis]", never, {}, {}, never>;
}
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationFirst {
    templateRef: TemplateRef<NgbPaginationLinkContext>;
    constructor(templateRef: TemplateRef<NgbPaginationLinkContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationFirst>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationFirst, "ng-template[ngbPaginationFirst]", never, {}, {}, never>;
}
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationLast {
    templateRef: TemplateRef<NgbPaginationLinkContext>;
    constructor(templateRef: TemplateRef<NgbPaginationLinkContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationLast>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationLast, "ng-template[ngbPaginationLast]", never, {}, {}, never>;
}
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationNext {
    templateRef: TemplateRef<NgbPaginationLinkContext>;
    constructor(templateRef: TemplateRef<NgbPaginationLinkContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationNext>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationNext, "ng-template[ngbPaginationNext]", never, {}, {}, never>;
}
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationNumber {
    templateRef: TemplateRef<NgbPaginationNumberContext>;
    constructor(templateRef: TemplateRef<NgbPaginationNumberContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationNumber>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationNumber, "ng-template[ngbPaginationNumber]", never, {}, {}, never>;
}
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
export declare class NgbPaginationPrevious {
    templateRef: TemplateRef<NgbPaginationLinkContext>;
    constructor(templateRef: TemplateRef<NgbPaginationLinkContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPaginationPrevious>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPaginationPrevious, "ng-template[ngbPaginationPrevious]", never, {}, {}, never>;
}
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
export declare class NgbPagination implements OnChanges {
    pageCount: number;
    pages: number[];
    tplEllipsis: NgbPaginationEllipsis;
    tplFirst: NgbPaginationFirst;
    tplLast: NgbPaginationLast;
    tplNext: NgbPaginationNext;
    tplNumber: NgbPaginationNumber;
    tplPrevious: NgbPaginationPrevious;
    /**
     * If `true`, pagination links will be disabled.
     */
    disabled: boolean;
    /**
     * If `true`, the "First" and "Last" page links are shown.
     */
    boundaryLinks: boolean;
    /**
     * If `true`, the "Next" and "Previous" page links are shown.
     */
    directionLinks: boolean;
    /**
     * If `true`, the ellipsis symbols and first/last page numbers will be shown when `maxSize` > number of pages.
     */
    ellipses: boolean;
    /**
     * Whether to rotate pages when `maxSize` > number of pages.
     *
     * The current page always stays in the middle if `true`.
     */
    rotate: boolean;
    /**
     *  The number of items in your paginated collection.
     *
     *  Note, that this is not the number of pages. Page numbers are calculated dynamically based on
     *  `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
     *  you'll end up with 5 pages.
     */
    collectionSize: number;
    /**
     *  The maximum number of pages to display.
     */
    maxSize: number;
    /**
     *  The current page.
     *
     *  Page numbers start with `1`.
     */
    page: number;
    /**
     *  The number of items per page.
     */
    pageSize: number;
    /**
     *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
     *
     *  Event payload is the number of the newly selected page.
     *
     *  Page numbers start with `1`.
     */
    pageChange: EventEmitter<number>;
    /**
     * The pagination display size.
     *
     * Bootstrap currently supports small and large sizes.
     */
    size: 'sm' | 'lg';
    constructor(config: NgbPaginationConfig);
    hasPrevious(): boolean;
    hasNext(): boolean;
    nextDisabled(): boolean;
    previousDisabled(): boolean;
    selectPage(pageNumber: number): void;
    ngOnChanges(changes: SimpleChanges): void;
    isEllipsis(pageNumber: any): boolean;
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    private _applyEllipses;
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    private _applyRotation;
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    private _applyPagination;
    private _setPageInRange;
    private _updatePages;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPagination>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbPagination, "ngb-pagination", never, {
    "page": "page";
    "disabled": "disabled";
    "boundaryLinks": "boundaryLinks";
    "directionLinks": "directionLinks";
    "ellipses": "ellipses";
    "maxSize": "maxSize";
    "pageSize": "pageSize";
    "rotate": "rotate";
    "size": "size";
    "collectionSize": "collectionSize";
}, {
    "pageChange": "pageChange";
}, ["tplEllipsis", "tplFirst", "tplLast", "tplNext", "tplNumber", "tplPrevious"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5kLnRzIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0dBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLWNvbmZpZyc7XG4vKipcbiAqIEEgY29udGV4dCBmb3IgdGhlXG4gKiAqIGBOZ2JQYWdpbmF0aW9uRmlyc3RgXG4gKiAqIGBOZ2JQYWdpbmF0aW9uUHJldmlvdXNgXG4gKiAqIGBOZ2JQYWdpbmF0aW9uTmV4dGBcbiAqICogYE5nYlBhZ2luYXRpb25MYXN0YFxuICogKiBgTmdiUGFnaW5hdGlvbkVsbGlwc2lzYFxuICpcbiAqIGxpbmsgdGVtcGxhdGVzIGluIGNhc2UgeW91IHdhbnQgdG8gb3ZlcnJpZGUgb25lLlxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlBhZ2luYXRpb25MaW5rQ29udGV4dCB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwYWdlIG51bWJlclxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgY3VycmVudCBsaW5rIGlzIGRpc2FibGVkXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG4vKipcbiAqIEEgY29udGV4dCBmb3IgdGhlIGBOZ2JQYWdpbmF0aW9uTnVtYmVyYCBsaW5rIHRlbXBsYXRlIGluIGNhc2UgeW91IHdhbnQgdG8gb3ZlcnJpZGUgb25lLlxuICpcbiAqIEV4dGVuZHMgYE5nYlBhZ2luYXRpb25MaW5rQ29udGV4dGAuXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiUGFnaW5hdGlvbk51bWJlckNvbnRleHQgZXh0ZW5kcyBOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQge1xuICAgIC8qKlxuICAgICAqIFRoZSBwYWdlIG51bWJlciwgZGlzcGxheWVkIGJ5IHRoZSBjdXJyZW50IHBhZ2UgbGluay5cbiAgICAgKi9cbiAgICAkaW1wbGljaXQ6IG51bWJlcjtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlICdlbGxpcHNpcycgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYWdpbmF0aW9uRWxsaXBzaXMge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQ+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYWdpbmF0aW9uRmlyc3Qge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQ+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlICdsYXN0JyBsaW5rIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlBhZ2luYXRpb25MYXN0IHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0Pik7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIG1hdGNoIHRoZSAnbmV4dCcgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYWdpbmF0aW9uTmV4dCB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nYlBhZ2luYXRpb25MaW5rQ29udGV4dD47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nYlBhZ2luYXRpb25MaW5rQ29udGV4dD4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBtYXRjaCB0aGUgcGFnZSAnbnVtYmVyJyBsaW5rIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlBhZ2luYXRpb25OdW1iZXIge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nYlBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIG1hdGNoIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGVcbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUGFnaW5hdGlvblByZXZpb3VzIHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0Pik7XG59XG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgcGFnZSBudW1iZXJzIGFuZCBhbGxvd3MgdG8gY3VzdG9taXplIHRoZW0gaW4gc2V2ZXJhbCB3YXlzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwYWdlQ291bnQ6IG51bWJlcjtcbiAgICBwYWdlczogbnVtYmVyW107XG4gICAgdHBsRWxsaXBzaXM6IE5nYlBhZ2luYXRpb25FbGxpcHNpcztcbiAgICB0cGxGaXJzdDogTmdiUGFnaW5hdGlvbkZpcnN0O1xuICAgIHRwbExhc3Q6IE5nYlBhZ2luYXRpb25MYXN0O1xuICAgIHRwbE5leHQ6IE5nYlBhZ2luYXRpb25OZXh0O1xuICAgIHRwbE51bWJlcjogTmdiUGFnaW5hdGlvbk51bWJlcjtcbiAgICB0cGxQcmV2aW91czogTmdiUGFnaW5hdGlvblByZXZpb3VzO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG4gICAgICovXG4gICAgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuICAgICAqL1xuICAgIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGVsbGlwc2lzIHN5bWJvbHMgYW5kIGZpcnN0L2xhc3QgcGFnZSBudW1iZXJzIHdpbGwgYmUgc2hvd24gd2hlbiBgbWF4U2l6ZWAgPiBudW1iZXIgb2YgcGFnZXMuXG4gICAgICovXG4gICAgZWxsaXBzZXM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byByb3RhdGUgcGFnZXMgd2hlbiBgbWF4U2l6ZWAgPiBudW1iZXIgb2YgcGFnZXMuXG4gICAgICpcbiAgICAgKiBUaGUgY3VycmVudCBwYWdlIGFsd2F5cyBzdGF5cyBpbiB0aGUgbWlkZGxlIGlmIGB0cnVlYC5cbiAgICAgKi9cbiAgICByb3RhdGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4geW91ciBwYWdpbmF0ZWQgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqICBOb3RlLCB0aGF0IHRoaXMgaXMgbm90IHRoZSBudW1iZXIgb2YgcGFnZXMuIFBhZ2UgbnVtYmVycyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBiYXNlZCBvblxuICAgICAqICBgY29sbGVjdGlvblNpemVgIGFuZCBgcGFnZVNpemVgLiBFeC4gaWYgeW91IGhhdmUgMTAwIGl0ZW1zIGluIHlvdXIgY29sbGVjdGlvbiBhbmQgZGlzcGxheWluZyAyMCBpdGVtcyBwZXIgcGFnZSxcbiAgICAgKiAgeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG4gICAgICovXG4gICAgY29sbGVjdGlvblNpemU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiAgVGhlIG1heGltdW0gbnVtYmVyIG9mIHBhZ2VzIHRvIGRpc3BsYXkuXG4gICAgICovXG4gICAgbWF4U2l6ZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqICBUaGUgY3VycmVudCBwYWdlLlxuICAgICAqXG4gICAgICogIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cbiAgICAgKi9cbiAgICBwYWdlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiAgQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLiBXaWxsIGZpcmUgb25seSBpZiBjb2xsZWN0aW9uIHNpemUgaXMgc2V0IGFuZCBhbGwgdmFsdWVzIGFyZSB2YWxpZC5cbiAgICAgKlxuICAgICAqICBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG4gICAgICpcbiAgICAgKiAgUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuICAgICAqL1xuICAgIHBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIC8qKlxuICAgICAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cbiAgICAgKlxuICAgICAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuICAgICAqL1xuICAgIHNpemU6ICdzbScgfCAnbGcnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZyk7XG4gICAgaGFzUHJldmlvdXMoKTogYm9vbGVhbjtcbiAgICBoYXNOZXh0KCk6IGJvb2xlYW47XG4gICAgbmV4dERpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgcHJldmlvdXNEaXNhYmxlZCgpOiBib29sZWFuO1xuICAgIHNlbGVjdFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBpc0VsbGlwc2lzKHBhZ2VOdW1iZXI6IGFueSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBlbGxpcHNlcyBhbmQgZmlyc3QvbGFzdCBwYWdlIG51bWJlciB0byB0aGUgZGlzcGxheWVkIHBhZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYXBwbHlFbGxpcHNlcztcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHBhZ2UgbnVtYmVycyBiYXNlZCBvbiBtYXhTaXplIGl0ZW1zIHZpc2libGUuXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHBhZ2Ugc3RheXMgaW4gdGhlIG1pZGRsZTpcbiAgICAgKlxuICAgICAqIEV4LiBmb3Igc2VsZWN0ZWQgcGFnZSA9IDY6XG4gICAgICogWzUsKjYqLDddIGZvciBtYXhTaXplID0gM1xuICAgICAqIFs0LDUsKjYqLDddIGZvciBtYXhTaXplID0gNFxuICAgICAqL1xuICAgIHByaXZhdGUgX2FwcGx5Um90YXRpb247XG4gICAgLyoqXG4gICAgICogUGFnaW5hdGVzIHBhZ2UgbnVtYmVycyBiYXNlZCBvbiBtYXhTaXplIGl0ZW1zIHBlciBwYWdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2FwcGx5UGFnaW5hdGlvbjtcbiAgICBwcml2YXRlIF9zZXRQYWdlSW5SYW5nZTtcbiAgICBwcml2YXRlIF91cGRhdGVQYWdlcztcbn1cbiJdfQ==