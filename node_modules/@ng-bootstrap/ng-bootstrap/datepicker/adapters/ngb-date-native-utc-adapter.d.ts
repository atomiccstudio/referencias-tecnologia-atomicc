import { NgbDateStruct } from '../ngb-date-struct';
import { NgbDateNativeAdapter } from './ngb-date-native-adapter';
/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
    protected _fromNativeDate(date: Date): NgbDateStruct;
    protected _toNativeDate(date: NgbDateStruct): Date;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateNativeUTCAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateNativeUTCAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtbmF0aXZlLXV0Yy1hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm5nYi1kYXRlLW5hdGl2ZS11dGMtYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7OztBQUdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJy4uL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBOZ2JEYXRlTmF0aXZlQWRhcHRlciB9IGZyb20gJy4vbmdiLWRhdGUtbmF0aXZlLWFkYXB0ZXInO1xuLyoqXG4gKiBTYW1lIGFzIFtgTmdiRGF0ZU5hdGl2ZUFkYXB0ZXJgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZU5hdGl2ZUFkYXB0ZXIpLCBidXQgd2l0aCBVVEMgZGF0ZXMuXG4gKlxuICogQHNpbmNlIDMuMi4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVOYXRpdmVVVENBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZU5hdGl2ZUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBfZnJvbU5hdGl2ZURhdGUoZGF0ZTogRGF0ZSk6IE5nYkRhdGVTdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIF90b05hdGl2ZURhdGUoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IERhdGU7XG59XG4iXX0=