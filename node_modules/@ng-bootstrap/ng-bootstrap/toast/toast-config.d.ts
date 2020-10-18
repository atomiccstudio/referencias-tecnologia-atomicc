/**
 * Interface used to type all toast config options. See `NgbToastConfig`.
 *
 * @since 5.0.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbToastOptions {
    /**
     * Specify if the toast component should emit the `hide()` output
     * after a certain `delay` in ms.
     */
    autohide?: boolean;
    /**
     * Delay in ms after which the `hide()` output should be emitted.
     */
    delay?: number;
    /**
     * Type of aria-live attribute to be used.
     *
     * Could be one of these 2 values (as string):
     * - `polite` (default)
     * - `alert`
     */
    ariaLive?: 'polite' | 'alert';
}
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
export declare class NgbToastConfig implements NgbToastOptions {
    autohide: boolean;
    delay: number;
    ariaLive: 'polite' | 'alert';
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbToastConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gdHlwZSBhbGwgdG9hc3QgY29uZmlnIG9wdGlvbnMuIFNlZSBgTmdiVG9hc3RDb25maWdgLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlRvYXN0T3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBpZiB0aGUgdG9hc3QgY29tcG9uZW50IHNob3VsZCBlbWl0IHRoZSBgaGlkZSgpYCBvdXRwdXRcbiAgICAgKiBhZnRlciBhIGNlcnRhaW4gYGRlbGF5YCBpbiBtcy5cbiAgICAgKi9cbiAgICBhdXRvaGlkZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRGVsYXkgaW4gbXMgYWZ0ZXIgd2hpY2ggdGhlIGBoaWRlKClgIG91dHB1dCBzaG91bGQgYmUgZW1pdHRlZC5cbiAgICAgKi9cbiAgICBkZWxheT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUeXBlIG9mIGFyaWEtbGl2ZSBhdHRyaWJ1dGUgdG8gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIENvdWxkIGJlIG9uZSBvZiB0aGVzZSAyIHZhbHVlcyAoYXMgc3RyaW5nKTpcbiAgICAgKiAtIGBwb2xpdGVgIChkZWZhdWx0KVxuICAgICAqIC0gYGFsZXJ0YFxuICAgICAqL1xuICAgIGFyaWFMaXZlPzogJ3BvbGl0ZScgfCAnYWxlcnQnO1xufVxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBOZ2JUb2FzdCBjb21wb25lbnQuIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsXG4gKiBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW4gb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSB0b2FzdHMgdXNlZCBpbiB0aGVcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUb2FzdENvbmZpZyBpbXBsZW1lbnRzIE5nYlRvYXN0T3B0aW9ucyB7XG4gICAgYXV0b2hpZGU6IGJvb2xlYW47XG4gICAgZGVsYXk6IG51bWJlcjtcbiAgICBhcmlhTGl2ZTogJ3BvbGl0ZScgfCAnYWxlcnQnO1xufVxuIl19