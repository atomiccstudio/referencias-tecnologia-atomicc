import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, EventEmitter, NgZone, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { NgbCarouselConfig } from './carousel-config';
/**
 * A directive that wraps the individual carousel slide.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbSlide {
    tplRef: TemplateRef<any>;
    /**
     * Slide id that must be unique for the entire document.
     *
     * If not provided, will be generated in the `ngb-slide-xx` format.
     */
    id: string;
    constructor(tplRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbSlide>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbSlide, "ng-template[ngbSlide]", never, {
    "id": "id";
}, {}, never>;
}
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
export declare class NgbCarousel implements AfterContentChecked, AfterContentInit, OnDestroy {
    private _platformId;
    private _ngZone;
    private _cd;
    slides: QueryList<NgbSlide>;
    NgbSlideEventSource: typeof NgbSlideEventSource;
    private _destroy$;
    private _interval$;
    private _mouseHover$;
    private _pauseOnHover$;
    private _pause$;
    private _wrap$;
    /**
     * The slide id that should be displayed **initially**.
     *
     * For subsequent interactions use methods `select()`, `next()`, etc. and the `(slide)` output.
     */
    activeId: string;
    /**
     * Time in milliseconds before the next slide is shown.
     */
    set interval(value: number);
    get interval(): number;
    /**
     * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
     */
    set wrap(value: boolean);
    get wrap(): boolean;
    /**
     * If `true`, allows to interact with carousel using keyboard 'arrow left' and 'arrow right'.
     */
    keyboard: boolean;
    /**
     * If `true`, will pause slide switching when mouse cursor hovers the slide.
     *
     * @since 2.2.0
     */
    set pauseOnHover(value: boolean);
    get pauseOnHover(): boolean;
    /**
     * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
     *
     * @since 2.2.0
     */
    showNavigationArrows: boolean;
    /**
     * If `true`, navigation indicators at the bottom of the slide will be visible.
     *
     * @since 2.2.0
     */
    showNavigationIndicators: boolean;
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     */
    slide: EventEmitter<NgbSlideEvent>;
    constructor(config: NgbCarouselConfig, _platformId: any, _ngZone: NgZone, _cd: ChangeDetectorRef);
    mouseEnter(): void;
    mouseLeave(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /**
     * Navigates to a slide with the specified identifier.
     */
    select(slideId: string, source?: NgbSlideEventSource): void;
    /**
     * Navigates to the previous slide.
     */
    prev(source?: NgbSlideEventSource): void;
    /**
     * Navigates to the next slide.
     */
    next(source?: NgbSlideEventSource): void;
    /**
     * Pauses cycling through the slides.
     */
    pause(): void;
    /**
     * Restarts cycling through the slides from left to right.
     */
    cycle(): void;
    private _cycleToSelected;
    private _getSlideEventDirection;
    private _getSlideById;
    private _getSlideIdxById;
    private _getNextSlide;
    private _getPrevSlide;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCarousel>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbCarousel, "ngb-carousel", ["ngbCarousel"], {
    "interval": "interval";
    "wrap": "wrap";
    "keyboard": "keyboard";
    "pauseOnHover": "pauseOnHover";
    "showNavigationArrows": "showNavigationArrows";
    "showNavigationIndicators": "showNavigationIndicators";
    "activeId": "activeId";
}, {
    "slide": "slide";
}, ["slides"]>;
}
/**
 * A slide change event emitted right after the slide transition is completed.
 */
export interface NgbSlideEvent {
    /**
     * The previous slide id.
     */
    prev: string;
    /**
     * The current slide id.
     */
    current: string;
    /**
     * The slide event direction.
     *
     * Possible values are `'left' | 'right'`.
     */
    direction: NgbSlideEventDirection;
    /**
     * Whether the pause() method was called (and no cycle() call was done afterwards).
     *
     * @since 5.1.0
     */
    paused: boolean;
    /**
     * Source triggering the slide change event.
     *
     * Possible values are `'timer' | 'arrowLeft' | 'arrowRight' | 'indicator'`
     *
     * @since 5.1.0
     */
    source?: NgbSlideEventSource;
}
/**
 * Defines the carousel slide transition direction.
 */
export declare enum NgbSlideEventDirection {
    LEFT,
    RIGHT
}
export declare enum NgbSlideEventSource {
    TIMER = "timer",
    ARROW_LEFT = "arrowLeft",
    ARROW_RIGHT = "arrowRight",
    INDICATOR = "indicator"
}
export declare const NGB_CAROUSEL_DIRECTIVES: (typeof NgbSlide | typeof NgbCarousel)[];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZC50cyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLWNvbmZpZyc7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgdGhlIGluZGl2aWR1YWwgY2Fyb3VzZWwgc2xpZGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlNsaWRlIHtcbiAgICB0cGxSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogU2xpZGUgaWQgdGhhdCBtdXN0IGJlIHVuaXF1ZSBmb3IgdGhlIGVudGlyZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgd2lsbCBiZSBnZW5lcmF0ZWQgaW4gdGhlIGBuZ2Itc2xpZGUteHhgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHRwbFJlZjogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIENhcm91c2VsIGlzIGEgY29tcG9uZW50IHRvIGVhc2lseSBjcmVhdGUgYW5kIGNvbnRyb2wgc2xpZGVzaG93cy5cbiAqXG4gKiBBbGxvd3MgdG8gc2V0IGludGVydmFscywgY2hhbmdlIHRoZSB3YXkgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgc2xpZGVzIGFuZCBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyBBUEkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkNhcm91c2VsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybUlkO1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9jZDtcbiAgICBzbGlkZXM6IFF1ZXJ5TGlzdDxOZ2JTbGlkZT47XG4gICAgTmdiU2xpZGVFdmVudFNvdXJjZTogdHlwZW9mIE5nYlNsaWRlRXZlbnRTb3VyY2U7XG4gICAgcHJpdmF0ZSBfZGVzdHJveSQ7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwkO1xuICAgIHByaXZhdGUgX21vdXNlSG92ZXIkO1xuICAgIHByaXZhdGUgX3BhdXNlT25Ib3ZlciQ7XG4gICAgcHJpdmF0ZSBfcGF1c2UkO1xuICAgIHByaXZhdGUgX3dyYXAkO1xuICAgIC8qKlxuICAgICAqIFRoZSBzbGlkZSBpZCB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgKippbml0aWFsbHkqKi5cbiAgICAgKlxuICAgICAqIEZvciBzdWJzZXF1ZW50IGludGVyYWN0aW9ucyB1c2UgbWV0aG9kcyBgc2VsZWN0KClgLCBgbmV4dCgpYCwgZXRjLiBhbmQgdGhlIGAoc2xpZGUpYCBvdXRwdXQuXG4gICAgICovXG4gICAgYWN0aXZlSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgc2xpZGUgaXMgc2hvd24uXG4gICAgICovXG4gICAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpO1xuICAgIGdldCBpbnRlcnZhbCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB3aWxsICd3cmFwJyB0aGUgY2Fyb3VzZWwgYnkgc3dpdGNoaW5nIGZyb20gdGhlIGxhc3Qgc2xpZGUgYmFjayB0byB0aGUgZmlyc3QuXG4gICAgICovXG4gICAgc2V0IHdyYXAodmFsdWU6IGJvb2xlYW4pO1xuICAgIGdldCB3cmFwKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBhbGxvd3MgdG8gaW50ZXJhY3Qgd2l0aCBjYXJvdXNlbCB1c2luZyBrZXlib2FyZCAnYXJyb3cgbGVmdCcgYW5kICdhcnJvdyByaWdodCcuXG4gICAgICovXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB3aWxsIHBhdXNlIHNsaWRlIHN3aXRjaGluZyB3aGVuIG1vdXNlIGN1cnNvciBob3ZlcnMgdGhlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHNpbmNlIDIuMi4wXG4gICAgICovXG4gICAgc2V0IHBhdXNlT25Ib3Zlcih2YWx1ZTogYm9vbGVhbik7XG4gICAgZ2V0IHBhdXNlT25Ib3ZlcigpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgJ3ByZXZpb3VzJyBhbmQgJ25leHQnIG5hdmlnYXRpb24gYXJyb3dzIHdpbGwgYmUgdmlzaWJsZSBvbiB0aGUgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMi4yLjBcbiAgICAgKi9cbiAgICBzaG93TmF2aWdhdGlvbkFycm93czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIG5hdmlnYXRpb24gaW5kaWNhdG9ycyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzbGlkZSB3aWxsIGJlIHZpc2libGUuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMi4yLjBcbiAgICAgKi9cbiAgICBzaG93TmF2aWdhdGlvbkluZGljYXRvcnM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBTZWUgW2BOZ2JTbGlkZUV2ZW50YF0oIy9jb21wb25lbnRzL2Nhcm91c2VsL2FwaSNOZ2JTbGlkZUV2ZW50KSBmb3IgcGF5bG9hZCBkZXRhaWxzLlxuICAgICAqL1xuICAgIHNsaWRlOiBFdmVudEVtaXR0ZXI8TmdiU2xpZGVFdmVudD47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBOZ2JDYXJvdXNlbENvbmZpZywgX3BsYXRmb3JtSWQ6IGFueSwgX25nWm9uZTogTmdab25lLCBfY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBtb3VzZUVudGVyKCk6IHZvaWQ7XG4gICAgbW91c2VMZWF2ZSgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIGEgc2xpZGUgd2l0aCB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIuXG4gICAgICovXG4gICAgc2VsZWN0KHNsaWRlSWQ6IHN0cmluZywgc291cmNlPzogTmdiU2xpZGVFdmVudFNvdXJjZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRoZSBwcmV2aW91cyBzbGlkZS5cbiAgICAgKi9cbiAgICBwcmV2KHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2UpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBzbGlkZS5cbiAgICAgKi9cbiAgICBuZXh0KHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2UpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFBhdXNlcyBjeWNsaW5nIHRocm91Z2ggdGhlIHNsaWRlcy5cbiAgICAgKi9cbiAgICBwYXVzZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc3RhcnRzIGN5Y2xpbmcgdGhyb3VnaCB0aGUgc2xpZGVzIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgKi9cbiAgICBjeWNsZSgpOiB2b2lkO1xuICAgIHByaXZhdGUgX2N5Y2xlVG9TZWxlY3RlZDtcbiAgICBwcml2YXRlIF9nZXRTbGlkZUV2ZW50RGlyZWN0aW9uO1xuICAgIHByaXZhdGUgX2dldFNsaWRlQnlJZDtcbiAgICBwcml2YXRlIF9nZXRTbGlkZUlkeEJ5SWQ7XG4gICAgcHJpdmF0ZSBfZ2V0TmV4dFNsaWRlO1xuICAgIHByaXZhdGUgX2dldFByZXZTbGlkZTtcbn1cbi8qKlxuICogQSBzbGlkZSBjaGFuZ2UgZXZlbnQgZW1pdHRlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiU2xpZGVFdmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIHByZXZpb3VzIHNsaWRlIGlkLlxuICAgICAqL1xuICAgIHByZXY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzbGlkZSBpZC5cbiAgICAgKi9cbiAgICBjdXJyZW50OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHNsaWRlIGV2ZW50IGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYCdsZWZ0JyB8ICdyaWdodCdgLlxuICAgICAqL1xuICAgIGRpcmVjdGlvbjogTmdiU2xpZGVFdmVudERpcmVjdGlvbjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBwYXVzZSgpIG1ldGhvZCB3YXMgY2FsbGVkIChhbmQgbm8gY3ljbGUoKSBjYWxsIHdhcyBkb25lIGFmdGVyd2FyZHMpLlxuICAgICAqXG4gICAgICogQHNpbmNlIDUuMS4wXG4gICAgICovXG4gICAgcGF1c2VkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNvdXJjZSB0cmlnZ2VyaW5nIHRoZSBzbGlkZSBjaGFuZ2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGAndGltZXInIHwgJ2Fycm93TGVmdCcgfCAnYXJyb3dSaWdodCcgfCAnaW5kaWNhdG9yJ2BcbiAgICAgKlxuICAgICAqIEBzaW5jZSA1LjEuMFxuICAgICAqL1xuICAgIHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2U7XG59XG4vKipcbiAqIERlZmluZXMgdGhlIGNhcm91c2VsIHNsaWRlIHRyYW5zaXRpb24gZGlyZWN0aW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBlbnVtIE5nYlNsaWRlRXZlbnREaXJlY3Rpb24ge1xuICAgIExFRlQsXG4gICAgUklHSFRcbn1cbmV4cG9ydCBkZWNsYXJlIGVudW0gTmdiU2xpZGVFdmVudFNvdXJjZSB7XG4gICAgVElNRVIgPSBcInRpbWVyXCIsXG4gICAgQVJST1dfTEVGVCA9IFwiYXJyb3dMZWZ0XCIsXG4gICAgQVJST1dfUklHSFQgPSBcImFycm93UmlnaHRcIixcbiAgICBJTkRJQ0FUT1IgPSBcImluZGljYXRvclwiXG59XG5leHBvcnQgZGVjbGFyZSBjb25zdCBOR0JfQ0FST1VTRUxfRElSRUNUSVZFUzogKHR5cGVvZiBOZ2JTbGlkZSB8IHR5cGVvZiBOZ2JDYXJvdXNlbClbXTtcbiJdfQ==