/** Type for the callback used to revert the scrollbar compensation. */
import * as ɵngcc0 from '@angular/core';
export declare type CompensationReverter = () => void;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
export declare class ScrollBar {
    private _document;
    constructor(_document: any);
    /**
     * To be called right before a potential vertical scrollbar would be removed:
     *
     * - if there was a scrollbar, adds some compensation padding to the body
     * to keep the same layout as when the scrollbar is there
     * - if there was none, there is nothing to do
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    compensate(): CompensationReverter;
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    private _adjustBody;
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    private _isPresent;
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    private _getWidth;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollBar>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmQudHMiLCJzb3VyY2VzIjpbInNjcm9sbGJhci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFR5cGUgZm9yIHRoZSBjYWxsYmFjayB1c2VkIHRvIHJldmVydCB0aGUgc2Nyb2xsYmFyIGNvbXBlbnNhdGlvbi4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ29tcGVuc2F0aW9uUmV2ZXJ0ZXIgPSAoKSA9PiB2b2lkO1xuLyoqXG4gKiBVdGlsaXR5IHRvIGhhbmRsZSB0aGUgc2Nyb2xsYmFyLlxuICpcbiAqIEl0IGFsbG93cyB0byBjb21wZW5zYXRlIHRoZSBsYWNrIG9mIGEgdmVydGljYWwgc2Nyb2xsYmFyIGJ5IGFkZGluZyBhblxuICogZXF1aXZhbGVudCBwYWRkaW5nIG9uIHRoZSByaWdodCBvZiB0aGUgYm9keSwgYW5kIHRvIHJlbW92ZSB0aGlzIGNvbXBlbnNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2Nyb2xsQmFyIHtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBjb25zdHJ1Y3RvcihfZG9jdW1lbnQ6IGFueSk7XG4gICAgLyoqXG4gICAgICogVG8gYmUgY2FsbGVkIHJpZ2h0IGJlZm9yZSBhIHBvdGVudGlhbCB2ZXJ0aWNhbCBzY3JvbGxiYXIgd291bGQgYmUgcmVtb3ZlZDpcbiAgICAgKlxuICAgICAqIC0gaWYgdGhlcmUgd2FzIGEgc2Nyb2xsYmFyLCBhZGRzIHNvbWUgY29tcGVuc2F0aW9uIHBhZGRpbmcgdG8gdGhlIGJvZHlcbiAgICAgKiB0byBrZWVwIHRoZSBzYW1lIGxheW91dCBhcyB3aGVuIHRoZSBzY3JvbGxiYXIgaXMgdGhlcmVcbiAgICAgKiAtIGlmIHRoZXJlIHdhcyBub25lLCB0aGVyZSBpcyBub3RoaW5nIHRvIGRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGEgY2FsbGJhY2sgdXNlZCB0byByZXZlcnQgdGhlIGNvbXBlbnNhdGlvbiAobm9vcCBpZiB0aGVyZSB3YXMgbm9uZSxcbiAgICAgKiBvdGhlcndpc2UgYSBmdW5jdGlvbiByZW1vdmluZyB0aGUgcGFkZGluZylcbiAgICAgKi9cbiAgICBjb21wZW5zYXRlKCk6IENvbXBlbnNhdGlvblJldmVydGVyO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwYWRkaW5nIG9mIHRoZSBnaXZlbiB3aWR0aCBvbiB0aGUgcmlnaHQgb2YgdGhlIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGEgY2FsbGJhY2sgdXNlZCB0byByZXZlcnQgdGhlIHBhZGRpbmcgdG8gaXRzIHByZXZpb3VzIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWRqdXN0Qm9keTtcbiAgICAvKipcbiAgICAgKiBUZWxscyB3aGV0aGVyIGEgc2Nyb2xsYmFyIGlzIGN1cnJlbnRseSBwcmVzZW50IG9uIHRoZSBib2R5LlxuICAgICAqXG4gICAgICogQHJldHVybiB0cnVlIGlmIHNjcm9sbGJhciBpcyBwcmVzZW50LCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pc1ByZXNlbnQ7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggb2YgYSBzY3JvbGxiYXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHRoZSB3aWR0aCBvZiBhIHNjcm9sbGJhciBvbiB0aGlzIHBhZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRXaWR0aDtcbn1cbiJdfQ==