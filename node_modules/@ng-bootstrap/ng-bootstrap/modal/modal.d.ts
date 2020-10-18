import { Injector, ComponentFactoryResolver } from '@angular/core';
import { NgbModalOptions, NgbModalConfig } from './modal-config';
import { NgbModalRef } from './modal-ref';
import { NgbModalStack } from './modal-stack';
/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbModal {
    private _moduleCFR;
    private _injector;
    private _modalStack;
    private _config;
    constructor(_moduleCFR: ComponentFactoryResolver, _injector: Injector, _modalStack: NgbModalStack, _config: NgbModalConfig);
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     */
    open(content: any, options?: NgbModalOptions): NgbModalRef;
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * @since 3.1.0
     */
    dismissAll(reason?: any): void;
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * @since 3.3.0
     */
    hasOpenModals(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModal>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuZC50cyIsInNvdXJjZXMiOlsibW9kYWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbE9wdGlvbnMsIE5nYk1vZGFsQ29uZmlnIH0gZnJvbSAnLi9tb2RhbC1jb25maWcnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBOZ2JNb2RhbFN0YWNrIH0gZnJvbSAnLi9tb2RhbC1zdGFjayc7XG4vKipcbiAqIEEgc2VydmljZSBmb3Igb3BlbmluZyBtb2RhbCB3aW5kb3dzLlxuICpcbiAqIENyZWF0aW5nIGEgbW9kYWwgaXMgc3RyYWlnaHRmb3J3YXJkOiBjcmVhdGUgYSBjb21wb25lbnQgb3IgYSB0ZW1wbGF0ZSBhbmQgcGFzcyBpdCBhcyBhbiBhcmd1bWVudCB0b1xuICogdGhlIGAub3BlbigpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYk1vZGFsIHtcbiAgICBwcml2YXRlIF9tb2R1bGVDRlI7XG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I7XG4gICAgcHJpdmF0ZSBfbW9kYWxTdGFjaztcbiAgICBwcml2YXRlIF9jb25maWc7XG4gICAgY29uc3RydWN0b3IoX21vZHVsZUNGUjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBfaW5qZWN0b3I6IEluamVjdG9yLCBfbW9kYWxTdGFjazogTmdiTW9kYWxTdGFjaywgX2NvbmZpZzogTmdiTW9kYWxDb25maWcpO1xuICAgIC8qKlxuICAgICAqIE9wZW5zIGEgbmV3IG1vZGFsIHdpbmRvdyB3aXRoIHRoZSBzcGVjaWZpZWQgY29udGVudCBhbmQgc3VwcGxpZWQgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIENvbnRlbnQgY2FuIGJlIHByb3ZpZGVkIGFzIGEgYFRlbXBsYXRlUmVmYCBvciBhIGNvbXBvbmVudCB0eXBlLiBJZiB5b3UgcGFzcyBhIGNvbXBvbmVudCB0eXBlIGFzIGNvbnRlbnQsXG4gICAgICogdGhlbiBpbnN0YW5jZXMgb2YgdGhvc2UgY29tcG9uZW50cyBjYW4gYmUgaW5qZWN0ZWQgd2l0aCBhbiBpbnN0YW5jZSBvZiB0aGUgYE5nYkFjdGl2ZU1vZGFsYCBjbGFzcy4gWW91IGNhbiB0aGVuXG4gICAgICogdXNlIGBOZ2JBY3RpdmVNb2RhbGAgbWV0aG9kcyB0byBjbG9zZSAvIGRpc21pc3MgbW9kYWxzIGZyb20gXCJpbnNpZGVcIiBvZiB5b3VyIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEFsc28gc2VlIHRoZSBbYE5nYk1vZGFsT3B0aW9uc2BdKCMvY29tcG9uZW50cy9tb2RhbC9hcGkjTmdiTW9kYWxPcHRpb25zKSBmb3IgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIG9wdGlvbnMuXG4gICAgICovXG4gICAgb3Blbihjb250ZW50OiBhbnksIG9wdGlvbnM/OiBOZ2JNb2RhbE9wdGlvbnMpOiBOZ2JNb2RhbFJlZjtcbiAgICAvKipcbiAgICAgKiBEaXNtaXNzZXMgYWxsIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9kYWwgd2luZG93cyB3aXRoIHRoZSBzdXBwbGllZCByZWFzb24uXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4xLjBcbiAgICAgKi9cbiAgICBkaXNtaXNzQWxsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZXJlIGFyZSBjdXJyZW50bHkgYW55IG9wZW4gbW9kYWwgd2luZG93cyBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4zLjBcbiAgICAgKi9cbiAgICBoYXNPcGVuTW9kYWxzKCk6IGJvb2xlYW47XG59XG4iXX0=