import { EventEmitter, OnInit, OnDestroy, OnChanges, Injector, Renderer2, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, NgZone, SimpleChanges, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { PlacementArray } from '../util/positioning';
import { NgbPopoverConfig } from './popover-config';
import * as ɵngcc0 from '@angular/core';
export declare class NgbPopoverWindow {
    title: undefined | string | TemplateRef<any>;
    id: string;
    popoverClass: string;
    context: any;
    isTitleTemplate(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPopoverWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbPopoverWindow, "ngb-popover-window", never, {
    "title": "title";
    "id": "id";
    "popoverClass": "popoverClass";
    "context": "context";
}, {}, never>;
}
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
export declare class NgbPopover implements OnInit, OnDestroy, OnChanges {
    private _elementRef;
    private _renderer;
    private _ngZone;
    private _document;
    private _changeDetector;
    /**
     * Indicates whether the popover should be closed on `Escape` key and inside/outside clicks:
     *
     * * `true` - closes on both outside and inside clicks as well as `Escape` presses
     * * `false` - disables the autoClose feature (NB: triggers still apply)
     * * `"inside"` - closes on inside clicks as well as Escape presses
     * * `"outside"` - closes on outside clicks (sometimes also achievable through triggers)
     * as well as `Escape` presses
     *
     * @since 3.0.0
     */
    autoClose: boolean | 'inside' | 'outside';
    /**
     * The string content or a `TemplateRef` for the content to be displayed in the popover.
     *
     * If the title and the content are empty, the popover won't open.
     */
    ngbPopover: string | TemplateRef<any>;
    /**
     * The title of the popover.
     *
     * If the title and the content are empty, the popover won't open.
     */
    popoverTitle: string | TemplateRef<any>;
    /**
     * The preferred placement of the popover.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"auto"` (same as the sequence above).
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
     * Specifies events that should trigger the tooltip.
     *
     * Supports a space separated list of event names.
     * For more details see the [triggers demo](#/components/popover/examples#triggers).
     */
    triggers: string;
    /**
     * A selector specifying the element the popover should be appended to.
     *
     * Currently only supports `body`.
     */
    container: string;
    /**
     * If `true`, popover is disabled and won't be displayed.
     *
     * @since 1.1.0
     */
    disablePopover: boolean;
    /**
     * An optional class applied to the popover window element.
     *
     * @since 2.2.0
     */
    popoverClass: string;
    /**
     * The opening delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    openDelay: number;
    /**
     * The closing delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    closeDelay: number;
    /**
     * An event emitted when the popover is shown. Contains no payload.
     */
    shown: EventEmitter<void>;
    /**
     * An event emitted when the popover is hidden. Contains no payload.
     */
    hidden: EventEmitter<void>;
    private _ngbPopoverWindowId;
    private _popupService;
    private _windowRef;
    private _unregisterListenersFn;
    private _zoneSubscription;
    private _isDisabled;
    constructor(_elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbPopoverConfig, _ngZone: NgZone, _document: any, _changeDetector: ChangeDetectorRef, applicationRef: ApplicationRef);
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     */
    open(context?: any): void;
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    close(): void;
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    toggle(): void;
    /**
     * Returns `true`, if the popover is currently shown.
     */
    isOpen(): boolean;
    ngOnInit(): void;
    ngOnChanges({ ngbPopover, popoverTitle, disablePopover, popoverClass }: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPopover>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPopover, "[ngbPopover]", ["ngbPopover"], {
    "autoClose": "autoClose";
    "placement": "placement";
    "triggers": "triggers";
    "container": "container";
    "disablePopover": "disablePopover";
    "popoverClass": "popoverClass";
    "openDelay": "openDelay";
    "closeDelay": "closeDelay";
    "ngbPopover": "ngbPopover";
    "popoverTitle": "popoverTitle";
}, {
    "shown": "shown";
    "hidden": "hidden";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kLnRzIiwic291cmNlcyI6WyJwb3BvdmVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEhBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJbmplY3RvciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBOZ1pvbmUsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBBcHBsaWNhdGlvblJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IE5nYlBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXItY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlBvcG92ZXJXaW5kb3cge1xuICAgIHRpdGxlOiB1bmRlZmluZWQgfCBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcG9wb3ZlckNsYXNzOiBzdHJpbmc7XG4gICAgY29udGV4dDogYW55O1xuICAgIGlzVGl0bGVUZW1wbGF0ZSgpOiBib29sZWFuO1xufVxuLyoqXG4gKiBBIGxpZ2h0d2VpZ2h0IGFuZCBleHRlbnNpYmxlIGRpcmVjdGl2ZSBmb3IgZmFuY3kgcG9wb3ZlciBjcmVhdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUG9wb3ZlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwb3BvdmVyIHNob3VsZCBiZSBjbG9zZWQgb24gYEVzY2FwZWAga2V5IGFuZCBpbnNpZGUvb3V0c2lkZSBjbGlja3M6XG4gICAgICpcbiAgICAgKiAqIGB0cnVlYCAtIGNsb3NlcyBvbiBib3RoIG91dHNpZGUgYW5kIGluc2lkZSBjbGlja3MgYXMgd2VsbCBhcyBgRXNjYXBlYCBwcmVzc2VzXG4gICAgICogKiBgZmFsc2VgIC0gZGlzYWJsZXMgdGhlIGF1dG9DbG9zZSBmZWF0dXJlIChOQjogdHJpZ2dlcnMgc3RpbGwgYXBwbHkpXG4gICAgICogKiBgXCJpbnNpZGVcImAgLSBjbG9zZXMgb24gaW5zaWRlIGNsaWNrcyBhcyB3ZWxsIGFzIEVzY2FwZSBwcmVzc2VzXG4gICAgICogKiBgXCJvdXRzaWRlXCJgIC0gY2xvc2VzIG9uIG91dHNpZGUgY2xpY2tzIChzb21ldGltZXMgYWxzbyBhY2hpZXZhYmxlIHRocm91Z2ggdHJpZ2dlcnMpXG4gICAgICogYXMgd2VsbCBhcyBgRXNjYXBlYCBwcmVzc2VzXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4wLjBcbiAgICAgKi9cbiAgICBhdXRvQ2xvc2U6IGJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJztcbiAgICAvKipcbiAgICAgKiBUaGUgc3RyaW5nIGNvbnRlbnQgb3IgYSBgVGVtcGxhdGVSZWZgIGZvciB0aGUgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHBvcG92ZXIuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdGl0bGUgYW5kIHRoZSBjb250ZW50IGFyZSBlbXB0eSwgdGhlIHBvcG92ZXIgd29uJ3Qgb3Blbi5cbiAgICAgKi9cbiAgICBuZ2JQb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcG9wb3Zlci5cbiAgICAgKlxuICAgICAqIElmIHRoZSB0aXRsZSBhbmQgdGhlIGNvbnRlbnQgYXJlIGVtcHR5LCB0aGUgcG9wb3ZlciB3b24ndCBvcGVuLlxuICAgICAqL1xuICAgIHBvcG92ZXJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgcG9wb3Zlci5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYFwidG9wXCJgLCBgXCJ0b3AtbGVmdFwiYCwgYFwidG9wLXJpZ2h0XCJgLCBgXCJib3R0b21cImAsIGBcImJvdHRvbS1sZWZ0XCJgLFxuICAgICAqIGBcImJvdHRvbS1yaWdodFwiYCwgYFwibGVmdFwiYCwgYFwibGVmdC10b3BcImAsIGBcImxlZnQtYm90dG9tXCJgLCBgXCJyaWdodFwiYCwgYFwicmlnaHQtdG9wXCJgLFxuICAgICAqIGBcInJpZ2h0LWJvdHRvbVwiYFxuICAgICAqXG4gICAgICogQWNjZXB0cyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIHdpdGggc3BhY2Ugc2VwYXJhdGVkIHBvc3NpYmxlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IG9yZGVyIG9mIHByZWZlcmVuY2UgaXMgYFwiYXV0b1wiYCAoc2FtZSBhcyB0aGUgc2VxdWVuY2UgYWJvdmUpLlxuICAgICAqXG4gICAgICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBldmVudCBuYW1lcy5cbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzIHNlZSB0aGUgW3RyaWdnZXJzIGRlbW9dKCMvY29tcG9uZW50cy9wb3BvdmVyL2V4YW1wbGVzI3RyaWdnZXJzKS5cbiAgICAgKi9cbiAgICB0cmlnZ2Vyczogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICpcbiAgICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBgYm9keWAuXG4gICAgICovXG4gICAgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBwb3BvdmVyIGlzIGRpc2FibGVkIGFuZCB3b24ndCBiZSBkaXNwbGF5ZWQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBkaXNhYmxlUG9wb3ZlcjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBjbGFzcyBhcHBsaWVkIHRvIHRoZSBwb3BvdmVyIHdpbmRvdyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHNpbmNlIDIuMi4wXG4gICAgICovXG4gICAgcG9wb3ZlckNsYXNzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG9wZW5pbmcgZGVsYXkgaW4gbXMuIFdvcmtzIG9ubHkgZm9yIFwibm9uLW1hbnVhbFwiIG9wZW5pbmcgdHJpZ2dlcnMgZGVmaW5lZCBieSB0aGUgYHRyaWdnZXJzYCBpbnB1dC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA0LjEuMFxuICAgICAqL1xuICAgIG9wZW5EZWxheTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjbG9zaW5nIGRlbGF5IGluIG1zLiBXb3JrcyBvbmx5IGZvciBcIm5vbi1tYW51YWxcIiBvcGVuaW5nIHRyaWdnZXJzIGRlZmluZWQgYnkgdGhlIGB0cmlnZ2Vyc2AgaW5wdXQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4xLjBcbiAgICAgKi9cbiAgICBjbG9zZURlbGF5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwb3BvdmVyIGlzIHNob3duLiBDb250YWlucyBubyBwYXlsb2FkLlxuICAgICAqL1xuICAgIHNob3duOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlbi4gQ29udGFpbnMgbm8gcGF5bG9hZC5cbiAgICAgKi9cbiAgICBoaWRkZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBwcml2YXRlIF9uZ2JQb3BvdmVyV2luZG93SWQ7XG4gICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3dpbmRvd1JlZjtcbiAgICBwcml2YXRlIF91bnJlZ2lzdGVyTGlzdGVuZXJzRm47XG4gICAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIGluamVjdG9yOiBJbmplY3RvciwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbmZpZzogTmdiUG9wb3ZlckNvbmZpZywgX25nWm9uZTogTmdab25lLCBfZG9jdW1lbnQ6IGFueSwgX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKTtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgcG9wb3Zlci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCB0byBiZSBhIFwibWFudWFsXCIgdHJpZ2dlcmluZy5cbiAgICAgKiBUaGUgYGNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIHZhbHVlIHRvIGJlIGluamVjdGVkIGludG8gdGhlIHBvcG92ZXIgdGVtcGxhdGUgd2hlbiBpdCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIG9wZW4oY29udGV4dD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBwb3BvdmVyLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjb25zaWRlcmVkIHRvIGJlIGEgXCJtYW51YWxcIiB0cmlnZ2VyaW5nIG9mIHRoZSBwb3BvdmVyLlxuICAgICAqL1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgcG9wb3Zlci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCB0byBiZSBhIFwibWFudWFsXCIgdHJpZ2dlcmluZyBvZiB0aGUgcG9wb3Zlci5cbiAgICAgKi9cbiAgICB0b2dnbGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCwgaWYgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IHNob3duLlxuICAgICAqL1xuICAgIGlzT3BlbigpOiBib29sZWFuO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoeyBuZ2JQb3BvdmVyLCBwb3BvdmVyVGl0bGUsIGRpc2FibGVQb3BvdmVyLCBwb3BvdmVyQ2xhc3MgfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==