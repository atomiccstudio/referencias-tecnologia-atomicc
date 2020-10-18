import { ChangeDetectorRef, ComponentFactoryResolver, ElementRef, EventEmitter, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef, ApplicationRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { Live } from '../util/accessibility/live';
import { PlacementArray } from '../util/positioning';
import { NgbTypeaheadConfig } from './typeahead-config';
import { ResultTemplateContext } from './typeahead-window';
/**
 * An event emitted right before an item is selected from the result list.
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbTypeaheadSelectItemEvent {
    /**
     * The item from the result list about to be selected.
     */
    item: any;
    /**
     * Calling this function will prevent item selection from happening.
     */
    preventDefault: () => void;
}
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
export declare class NgbTypeahead implements ControlValueAccessor, OnInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _live;
    private _document;
    private _ngZone;
    private _changeDetector;
    private _popupService;
    private _subscription;
    private _closed$;
    private _inputValueBackup;
    private _valueChanges;
    private _resubscribeTypeahead;
    private _windowRef;
    private _zoneSubscription;
    /**
     * The value for the `autocomplete` attribute for the `<input>` element.
     *
     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
     *
     * @since 2.1.0
     */
    autocomplete: string;
    /**
     * A selector specifying the element the typeahead popup will be appended to.
     *
     * Currently only supports `"body"`.
     */
    container: string;
    /**
     * If `true`, model values will not be restricted only to items selected from the popup.
     */
    editable: boolean;
    /**
     * If `true`, the first item in the result list will always stay focused while typing.
     */
    focusFirst: boolean;
    /**
     * The function that converts an item from the result list to a `string` to display in the `<input>` field.
     *
     * It is called when the user selects something in the popup or the model value changes, so the input needs to
     * be updated.
     */
    inputFormatter: (item: any) => string;
    /**
     * The function that converts a stream of text values from the `<input>` element to the stream of the array of items
     * to display in the typeahead popup.
     *
     * If the resulting observable emits a non-empty array - the popup will be shown. If it emits an empty array - the
     * popup will be closed.
     *
     * See the [basic example](#/components/typeahead/examples#basic) for more details.
     *
     * Note that the `this` argument is `undefined` so you need to explicitly bind it to a desired "this" target.
     */
    ngbTypeahead: (text: Observable<string>) => Observable<readonly any[]>;
    /**
     * The function that converts an item from the result list to a `string` to display in the popup.
     *
     * Must be provided, if your `ngbTypeahead` returns something other than `Observable<string[]>`.
     *
     * Alternatively for more complex markup in the popup you should use `resultTemplate`.
     */
    resultFormatter: (item: any) => string;
    /**
     * The template to override the way resulting items are displayed in the popup.
     *
     * See the [ResultTemplateContext](#/components/typeahead/api#ResultTemplateContext) for the template context.
     *
     * Also see the [template for results demo](#/components/typeahead/examples#template) for more details.
     */
    resultTemplate: TemplateRef<ResultTemplateContext>;
    /**
     * If `true`, will show the hint in the `<input>` when an item in the result list matches.
     */
    showHint: boolean;
    /**
     * The preferred placement of the typeahead.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
     * An event emitted right before an item is selected from the result list.
     *
     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
     */
    selectItem: EventEmitter<NgbTypeaheadSelectItemEvent>;
    activeDescendant: string;
    popupId: string;
    private _onTouched;
    private _onChange;
    constructor(_elementRef: ElementRef<HTMLInputElement>, viewContainerRef: ViewContainerRef, _renderer: Renderer2, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, config: NgbTypeaheadConfig, ngZone: NgZone, _live: Live, _document: any, _ngZone: NgZone, _changeDetector: ChangeDetectorRef, applicationRef: ApplicationRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    /**
     * Dismisses typeahead popup window
     */
    dismissPopup(): void;
    /**
     * Returns true if the typeahead popup window is displayed
     */
    isPopupOpen(): boolean;
    handleBlur(): void;
    handleKeyDown(event: KeyboardEvent): void;
    private _openPopup;
    private _closePopup;
    private _selectResult;
    private _selectResultClosePopup;
    private _showHint;
    private _formatItemForInput;
    private _writeInputValue;
    private _subscribeToUserInput;
    private _unsubscribeFromUserInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTypeahead>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTypeahead, "input[ngbTypeahead]", ["ngbTypeahead"], {
    "autocomplete": "autocomplete";
    "placement": "placement";
    "container": "container";
    "editable": "editable";
    "focusFirst": "focusFirst";
    "showHint": "showHint";
    "inputFormatter": "inputFormatter";
    "ngbTypeahead": "ngbTypeahead";
    "resultFormatter": "resultFormatter";
    "resultTemplate": "resultTemplate";
}, {
    "selectItem": "selectItem";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmQudHMiLCJzb3VyY2VzIjpbInR5cGVhaGVhZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMklBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQXBwbGljYXRpb25SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGl2ZSB9IGZyb20gJy4uL3V0aWwvYWNjZXNzaWJpbGl0eS9saXZlJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBOZ2JUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC1jb25maWcnO1xuaW1wb3J0IHsgUmVzdWx0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi90eXBlYWhlYWQtd2luZG93Jztcbi8qKlxuICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgYW4gaXRlbSBpcyBzZWxlY3RlZCBmcm9tIHRoZSByZXN1bHQgbGlzdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JUeXBlYWhlYWRTZWxlY3RJdGVtRXZlbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtIGZyb20gdGhlIHJlc3VsdCBsaXN0IGFib3V0IHRvIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGl0ZW06IGFueTtcbiAgICAvKipcbiAgICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IGl0ZW0gc2VsZWN0aW9uIGZyb20gaGFwcGVuaW5nLlxuICAgICAqL1xuICAgIHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBwcm92aWRpbmcgYSBzaW1wbGUgd2F5IG9mIGNyZWF0aW5nIHBvd2VyZnVsIHR5cGVhaGVhZHMgZnJvbSBhbnkgdGV4dCBpbnB1dC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiVHlwZWFoZWFkIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xuICAgIHByaXZhdGUgX2xpdmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yO1xuICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTtcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfY2xvc2VkJDtcbiAgICBwcml2YXRlIF9pbnB1dFZhbHVlQmFja3VwO1xuICAgIHByaXZhdGUgX3ZhbHVlQ2hhbmdlcztcbiAgICBwcml2YXRlIF9yZXN1YnNjcmliZVR5cGVhaGVhZDtcbiAgICBwcml2YXRlIF93aW5kb3dSZWY7XG4gICAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjtcbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoZSBgYXV0b2NvbXBsZXRlYCBhdHRyaWJ1dGUgZm9yIHRoZSBgPGlucHV0PmAgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIGBcIm9mZlwiYCB0byBkaXNhYmxlIHRoZSBuYXRpdmUgYnJvd3NlciBhdXRvY29tcGxldGUsIGJ1dCB5b3UgY2FuIG92ZXJyaWRlIGl0IGlmIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAyLjEuMFxuICAgICAqL1xuICAgIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHBvcHVwIHdpbGwgYmUgYXBwZW5kZWQgdG8uXG4gICAgICpcbiAgICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBgXCJib2R5XCJgLlxuICAgICAqL1xuICAgIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgbW9kZWwgdmFsdWVzIHdpbGwgbm90IGJlIHJlc3RyaWN0ZWQgb25seSB0byBpdGVtcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cC5cbiAgICAgKi9cbiAgICBlZGl0YWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmaXJzdCBpdGVtIGluIHRoZSByZXN1bHQgbGlzdCB3aWxsIGFsd2F5cyBzdGF5IGZvY3VzZWQgd2hpbGUgdHlwaW5nLlxuICAgICAqL1xuICAgIGZvY3VzRmlyc3Q6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYW4gaXRlbSBmcm9tIHRoZSByZXN1bHQgbGlzdCB0byBhIGBzdHJpbmdgIHRvIGRpc3BsYXkgaW4gdGhlIGA8aW5wdXQ+YCBmaWVsZC5cbiAgICAgKlxuICAgICAqIEl0IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgc29tZXRoaW5nIGluIHRoZSBwb3B1cCBvciB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcywgc28gdGhlIGlucHV0IG5lZWRzIHRvXG4gICAgICogYmUgdXBkYXRlZC5cbiAgICAgKi9cbiAgICBpbnB1dEZvcm1hdHRlcjogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgc3RyZWFtIG9mIHRleHQgdmFsdWVzIGZyb20gdGhlIGA8aW5wdXQ+YCBlbGVtZW50IHRvIHRoZSBzdHJlYW0gb2YgdGhlIGFycmF5IG9mIGl0ZW1zXG4gICAgICogdG8gZGlzcGxheSBpbiB0aGUgdHlwZWFoZWFkIHBvcHVwLlxuICAgICAqXG4gICAgICogSWYgdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIGVtaXRzIGEgbm9uLWVtcHR5IGFycmF5IC0gdGhlIHBvcHVwIHdpbGwgYmUgc2hvd24uIElmIGl0IGVtaXRzIGFuIGVtcHR5IGFycmF5IC0gdGhlXG4gICAgICogcG9wdXAgd2lsbCBiZSBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBTZWUgdGhlIFtiYXNpYyBleGFtcGxlXSgjL2NvbXBvbmVudHMvdHlwZWFoZWFkL2V4YW1wbGVzI2Jhc2ljKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBgdGhpc2AgYXJndW1lbnQgaXMgYHVuZGVmaW5lZGAgc28geW91IG5lZWQgdG8gZXhwbGljaXRseSBiaW5kIGl0IHRvIGEgZGVzaXJlZCBcInRoaXNcIiB0YXJnZXQuXG4gICAgICovXG4gICAgbmdiVHlwZWFoZWFkOiAodGV4dDogT2JzZXJ2YWJsZTxzdHJpbmc+KSA9PiBPYnNlcnZhYmxlPHJlYWRvbmx5IGFueVtdPjtcbiAgICAvKipcbiAgICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhbiBpdGVtIGZyb20gdGhlIHJlc3VsdCBsaXN0IHRvIGEgYHN0cmluZ2AgdG8gZGlzcGxheSBpbiB0aGUgcG9wdXAuXG4gICAgICpcbiAgICAgKiBNdXN0IGJlIHByb3ZpZGVkLCBpZiB5b3VyIGBuZ2JUeXBlYWhlYWRgIHJldHVybnMgc29tZXRoaW5nIG90aGVyIHRoYW4gYE9ic2VydmFibGU8c3RyaW5nW10+YC5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHkgZm9yIG1vcmUgY29tcGxleCBtYXJrdXAgaW4gdGhlIHBvcHVwIHlvdSBzaG91bGQgdXNlIGByZXN1bHRUZW1wbGF0ZWAuXG4gICAgICovXG4gICAgcmVzdWx0Rm9ybWF0dGVyOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIG92ZXJyaWRlIHRoZSB3YXkgcmVzdWx0aW5nIGl0ZW1zIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHBvcHVwLlxuICAgICAqXG4gICAgICogU2VlIHRoZSBbUmVzdWx0VGVtcGxhdGVDb250ZXh0XSgjL2NvbXBvbmVudHMvdHlwZWFoZWFkL2FwaSNSZXN1bHRUZW1wbGF0ZUNvbnRleHQpIGZvciB0aGUgdGVtcGxhdGUgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEFsc28gc2VlIHRoZSBbdGVtcGxhdGUgZm9yIHJlc3VsdHMgZGVtb10oIy9jb21wb25lbnRzL3R5cGVhaGVhZC9leGFtcGxlcyN0ZW1wbGF0ZSkgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgKi9cbiAgICByZXN1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8UmVzdWx0VGVtcGxhdGVDb250ZXh0PjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHdpbGwgc2hvdyB0aGUgaGludCBpbiB0aGUgYDxpbnB1dD5gIHdoZW4gYW4gaXRlbSBpbiB0aGUgcmVzdWx0IGxpc3QgbWF0Y2hlcy5cbiAgICAgKi9cbiAgICBzaG93SGludDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgdHlwZWFoZWFkLlxuICAgICAqXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZSBgXCJ0b3BcImAsIGBcInRvcC1sZWZ0XCJgLCBgXCJ0b3AtcmlnaHRcImAsIGBcImJvdHRvbVwiYCwgYFwiYm90dG9tLWxlZnRcImAsXG4gICAgICogYFwiYm90dG9tLXJpZ2h0XCJgLCBgXCJsZWZ0XCJgLCBgXCJsZWZ0LXRvcFwiYCwgYFwibGVmdC1ib3R0b21cImAsIGBcInJpZ2h0XCJgLCBgXCJyaWdodC10b3BcImAsXG4gICAgICogYFwicmlnaHQtYm90dG9tXCJgXG4gICAgICpcbiAgICAgKiBBY2NlcHRzIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmcgd2l0aCBzcGFjZSBzZXBhcmF0ZWQgcG9zc2libGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgb3JkZXIgb2YgcHJlZmVyZW5jZSBpcyBgXCJib3R0b20tbGVmdCBib3R0b20tcmlnaHQgdG9wLWxlZnQgdG9wLXJpZ2h0XCJgXG4gICAgICpcbiAgICAgKiBQbGVhc2Ugc2VlIHRoZSBbcG9zaXRpb25pbmcgb3ZlcnZpZXddKCMvcG9zaXRpb25pbmcpIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICAvKipcbiAgICAgKiBBbiBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSBhbiBpdGVtIGlzIHNlbGVjdGVkIGZyb20gdGhlIHJlc3VsdCBsaXN0LlxuICAgICAqXG4gICAgICogRXZlbnQgcGF5bG9hZCBpcyBvZiB0eXBlIFtgTmdiVHlwZWFoZWFkU2VsZWN0SXRlbUV2ZW50YF0oIy9jb21wb25lbnRzL3R5cGVhaGVhZC9hcGkjTmdiVHlwZWFoZWFkU2VsZWN0SXRlbUV2ZW50KS5cbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8TmdiVHlwZWFoZWFkU2VsZWN0SXRlbUV2ZW50PjtcbiAgICBhY3RpdmVEZXNjZW5kYW50OiBzdHJpbmc7XG4gICAgcG9wdXBJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX29uVG91Y2hlZDtcbiAgICBwcml2YXRlIF9vbkNoYW5nZTtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIGluamVjdG9yOiBJbmplY3RvciwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNvbmZpZzogTmdiVHlwZWFoZWFkQ29uZmlnLCBuZ1pvbmU6IE5nWm9uZSwgX2xpdmU6IExpdmUsIF9kb2N1bWVudDogYW55LCBfbmdab25lOiBOZ1pvbmUsIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEaXNtaXNzZXMgdHlwZWFoZWFkIHBvcHVwIHdpbmRvd1xuICAgICAqL1xuICAgIGRpc21pc3NQb3B1cCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHlwZWFoZWFkIHBvcHVwIHdpbmRvdyBpcyBkaXNwbGF5ZWRcbiAgICAgKi9cbiAgICBpc1BvcHVwT3BlbigpOiBib29sZWFuO1xuICAgIGhhbmRsZUJsdXIoKTogdm9pZDtcbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBwcml2YXRlIF9vcGVuUG9wdXA7XG4gICAgcHJpdmF0ZSBfY2xvc2VQb3B1cDtcbiAgICBwcml2YXRlIF9zZWxlY3RSZXN1bHQ7XG4gICAgcHJpdmF0ZSBfc2VsZWN0UmVzdWx0Q2xvc2VQb3B1cDtcbiAgICBwcml2YXRlIF9zaG93SGludDtcbiAgICBwcml2YXRlIF9mb3JtYXRJdGVtRm9ySW5wdXQ7XG4gICAgcHJpdmF0ZSBfd3JpdGVJbnB1dFZhbHVlO1xuICAgIHByaXZhdGUgX3N1YnNjcmliZVRvVXNlcklucHV0O1xuICAgIHByaXZhdGUgX3Vuc3Vic2NyaWJlRnJvbVVzZXJJbnB1dDtcbn1cbiJdfQ==