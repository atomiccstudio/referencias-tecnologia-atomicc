import * as ɵngcc0 from '@angular/core';
export declare function NGB_TIMEPICKER_I18N_FACTORY(locale: any): NgbTimepickerI18nDefault;
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
export declare abstract class NgbTimepickerI18n {
    /**
     * Returns the name for the period before midday.
     */
    abstract getMorningPeriod(): string;
    /**
     * Returns the name for the period after midday.
     */
    abstract getAfternoonPeriod(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepickerI18n>;
}
export declare class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
    private _periods;
    constructor(locale: string);
    getMorningPeriod(): string;
    getAfternoonPeriod(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepickerI18nDefault>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimepickerI18nDefault>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1pMThuLmQudHMiLCJzb3VyY2VzIjpbInRpbWVwaWNrZXItaTE4bi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTkdCX1RJTUVQSUNLRVJfSTE4Tl9GQUNUT1JZKGxvY2FsZTogYW55KTogTmdiVGltZXBpY2tlckkxOG5EZWZhdWx0O1xuLyoqXG4gKiBUeXBlIG9mIHRoZSBzZXJ2aWNlIHN1cHBseWluZyBkYXkgcGVyaW9kcyAoZm9yIGV4YW1wbGUsICdBTScgYW5kICdQTScpIHRvIE5nYlRpbWVwaWNrZXIgY29tcG9uZW50LlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBzZXJ2aWNlIGhvbm9ycyB0aGUgQW5ndWxhciBsb2NhbGUsIGFuZCB1c2VzIHRoZSByZWdpc3RlcmVkIGxvY2FsZSBkYXRhLFxuICogYXMgZXhwbGFpbmVkIGluIHRoZSBBbmd1bGFyIGkxOG4gZ3VpZGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE5nYlRpbWVwaWNrZXJJMThuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYW1lIGZvciB0aGUgcGVyaW9kIGJlZm9yZSBtaWRkYXkuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0TW9ybmluZ1BlcmlvZCgpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmFtZSBmb3IgdGhlIHBlcmlvZCBhZnRlciBtaWRkYXkuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0QWZ0ZXJub29uUGVyaW9kKCk6IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRpbWVwaWNrZXJJMThuRGVmYXVsdCBleHRlbmRzIE5nYlRpbWVwaWNrZXJJMThuIHtcbiAgICBwcml2YXRlIF9wZXJpb2RzO1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nKTtcbiAgICBnZXRNb3JuaW5nUGVyaW9kKCk6IHN0cmluZztcbiAgICBnZXRBZnRlcm5vb25QZXJpb2QoKTogc3RyaW5nO1xufVxuIl19