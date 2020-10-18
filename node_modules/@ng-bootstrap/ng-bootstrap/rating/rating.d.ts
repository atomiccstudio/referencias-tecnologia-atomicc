import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgbRatingConfig } from './rating-config';
import { ControlValueAccessor } from '@angular/forms';
/**
 * The context for the custom star display template defined in the `starTemplate`.
 */
import * as ɵngcc0 from '@angular/core';
export interface StarTemplateContext {
    /**
     * The star fill percentage, an integer in the `[0, 100]` range.
     */
    fill: number;
    /**
     * Index of the star, starts with `0`.
     */
    index: number;
}
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
export declare class NgbRating implements ControlValueAccessor, OnInit, OnChanges {
    private _changeDetectorRef;
    contexts: StarTemplateContext[];
    disabled: boolean;
    nextRate: number;
    /**
     * The maximal rating that can be given.
     */
    max: number;
    /**
     * The current rating. Could be a decimal value like `3.75`.
     */
    rate: number;
    /**
     * If `true`, the rating can't be changed.
     */
    readonly: boolean;
    /**
     * If `true`, the rating can be reset to `0` by mouse clicking currently set rating.
     */
    resettable: boolean;
    /**
     * The template to override the way each star is displayed.
     *
     * Alternatively put an `<ng-template>` as the only child of your `<ngb-rating>` element
     */
    starTemplate: TemplateRef<StarTemplateContext>;
    starTemplateFromContent: TemplateRef<StarTemplateContext>;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload equals to the rating being hovered over.
     */
    hover: EventEmitter<number>;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload equals to the rating of the last item being hovered over.
     */
    leave: EventEmitter<number>;
    /**
     * An event emitted when the user selects a new rating.
     *
     * Event payload equals to the newly selected rating.
     */
    rateChange: EventEmitter<number>;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(config: NgbRatingConfig, _changeDetectorRef: ChangeDetectorRef);
    ariaValueText(): string;
    enter(value: number): void;
    handleBlur(): void;
    handleClick(value: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    reset(): void;
    setDisabledState(isDisabled: boolean): void;
    update(value: number, internalChange?: boolean): void;
    writeValue(value: any): void;
    private _getFillValue;
    private _updateState;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbRating>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbRating, "ngb-rating", never, {
    "max": "max";
    "readonly": "readonly";
    "rate": "rate";
    "resettable": "resettable";
    "starTemplate": "starTemplate";
}, {
    "hover": "hover";
    "leave": "leave";
    "rateChange": "rateChange";
}, ["starTemplateFromContent"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmQudHMiLCJzb3VyY2VzIjpbInJhdGluZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JSYXRpbmdDb25maWcgfSBmcm9tICcuL3JhdGluZy1jb25maWcnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vKipcbiAqIFRoZSBjb250ZXh0IGZvciB0aGUgY3VzdG9tIHN0YXIgZGlzcGxheSB0ZW1wbGF0ZSBkZWZpbmVkIGluIHRoZSBgc3RhclRlbXBsYXRlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFyVGVtcGxhdGVDb250ZXh0IHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RhciBmaWxsIHBlcmNlbnRhZ2UsIGFuIGludGVnZXIgaW4gdGhlIGBbMCwgMTAwXWAgcmFuZ2UuXG4gICAgICovXG4gICAgZmlsbDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBzdGFyLCBzdGFydHMgd2l0aCBgMGAuXG4gICAgICovXG4gICAgaW5kZXg6IG51bWJlcjtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBoZWxwcyB2aXN1YWxpc2luZyBhbmQgaW50ZXJhY3Rpbmcgd2l0aCBhIHN0YXIgcmF0aW5nIGJhci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUmF0aW5nIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBjb250ZXh0czogU3RhclRlbXBsYXRlQ29udGV4dFtdO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIG5leHRSYXRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltYWwgcmF0aW5nIHRoYXQgY2FuIGJlIGdpdmVuLlxuICAgICAqL1xuICAgIG1heDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuICAgICAqL1xuICAgIHJhdGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuJ3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0IHRvIGAwYCBieSBtb3VzZSBjbGlja2luZyBjdXJyZW50bHkgc2V0IHJhdGluZy5cbiAgICAgKi9cbiAgICByZXNldHRhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byBvdmVycmlkZSB0aGUgd2F5IGVhY2ggc3RhciBpcyBkaXNwbGF5ZWQuXG4gICAgICpcbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHB1dCBhbiBgPG5nLXRlbXBsYXRlPmAgYXMgdGhlIG9ubHkgY2hpbGQgb2YgeW91ciBgPG5nYi1yYXRpbmc+YCBlbGVtZW50XG4gICAgICovXG4gICAgc3RhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxTdGFyVGVtcGxhdGVDb250ZXh0PjtcbiAgICBzdGFyVGVtcGxhdGVGcm9tQ29udGVudDogVGVtcGxhdGVSZWY8U3RhclRlbXBsYXRlQ29udGV4dD47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG4gICAgICpcbiAgICAgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgcmF0aW5nIGJlaW5nIGhvdmVyZWQgb3Zlci5cbiAgICAgKi9cbiAgICBob3ZlcjogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG4gICAgICpcbiAgICAgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuICAgICAqL1xuICAgIGxlYXZlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICAvKipcbiAgICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIG5ldyByYXRpbmcuXG4gICAgICpcbiAgICAgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuICAgICAqL1xuICAgIHJhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIG9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE5nYlJhdGluZ0NvbmZpZywgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgYXJpYVZhbHVlVGV4dCgpOiBzdHJpbmc7XG4gICAgZW50ZXIodmFsdWU6IG51bWJlcik6IHZvaWQ7XG4gICAgaGFuZGxlQmx1cigpOiB2b2lkO1xuICAgIGhhbmRsZUNsaWNrKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICAgIGhhbmRsZUtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVzZXQoKTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHVwZGF0ZSh2YWx1ZTogbnVtYmVyLCBpbnRlcm5hbENoYW5nZT86IGJvb2xlYW4pOiB2b2lkO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfZ2V0RmlsbFZhbHVlO1xuICAgIHByaXZhdGUgX3VwZGF0ZVN0YXRlO1xufVxuIl19