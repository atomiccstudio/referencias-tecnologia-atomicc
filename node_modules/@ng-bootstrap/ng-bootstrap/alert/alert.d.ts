import { EventEmitter, Renderer2, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbAlertConfig } from './alert-config';
/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbAlert implements OnInit, OnChanges {
    private _renderer;
    private _element;
    /**
     * If `true`, alert can be dismissed by the user.
     *
     * The close button (×) will be displayed and you can be notified
     * of the event with the `(close)` output.
     */
    dismissible: boolean;
    /**
     * Type of the alert.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     */
    type: string;
    /**
     * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
     */
    close: EventEmitter<void>;
    constructor(config: NgbAlertConfig, _renderer: Renderer2, _element: ElementRef);
    closeHandler(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbAlert>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbAlert, "ngb-alert", never, {
    "dismissible": "dismissible";
    "type": "type";
}, {
    "close": "close";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuZC50cyIsInNvdXJjZXMiOlsiYWxlcnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFsZXJ0Q29uZmlnIH0gZnJvbSAnLi9hbGVydC1jb25maWcnO1xuLyoqXG4gKiBBbGVydCBpcyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGNvbnRleHR1YWwgZmVlZGJhY2sgbWVzc2FnZXMgZm9yIHVzZXIuXG4gKlxuICogSXQgc3VwcG9ydHMgc2V2ZXJhbCBhbGVydCB0eXBlcyBhbmQgY2FuIGJlIGRpc21pc3NlZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiQWxlcnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBfZWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNhbiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWRcbiAgICAgKiBvZiB0aGUgZXZlbnQgd2l0aCB0aGUgYChjbG9zZSlgIG91dHB1dC5cbiAgICAgKi9cbiAgICBkaXNtaXNzaWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUeXBlIG9mIHRoZSBhbGVydC5cbiAgICAgKlxuICAgICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgICAqIGAnc2Vjb25kYXJ5J2AsIGAnbGlnaHQnYCBhbmQgYCdkYXJrJ2AuXG4gICAgICovXG4gICAgdHlwZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2xvc2UgYnV0dG9uIGlzIGNsaWNrZWQuIEl0IGhhcyBubyBwYXlsb2FkIGFuZCBvbmx5IHJlbGV2YW50IGZvciBkaXNtaXNzaWJsZSBhbGVydHMuXG4gICAgICovXG4gICAgY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE5nYkFsZXJ0Q29uZmlnLCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIGNsb3NlSGFuZGxlcigpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=