import { NgbDateStruct } from './ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_18N_FACTORY(locale: any): NgbDatepickerI18nDefault;
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
export declare abstract class NgbDatepickerI18n {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     */
    abstract getWeekdayShortName(weekday: number): string;
    /**
     * Returns the short month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     */
    abstract getMonthShortName(month: number, year?: number): string;
    /**
     * Returns the full month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     */
    abstract getMonthFullName(month: number, year?: number): string;
    /**
     * Returns the value of the `aria-label` attribute for a specific date.
     *
     * @since 2.0.0
     */
    abstract getDayAriaLabel(date: NgbDateStruct): string;
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    getDayNumerals(date: NgbDateStruct): string;
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    getWeekNumerals(weekNumber: number): string;
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    getYearNumerals(year: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerI18n>;
}
export declare class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    private _locale;
    private _weekdaysShort;
    private _monthsShort;
    private _monthsFull;
    constructor(_locale: string);
    getWeekdayShortName(weekday: number): string;
    getMonthShortName(month: number): string;
    getMonthFullName(month: number): string;
    getDayAriaLabel(date: NgbDateStruct): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerI18nDefault>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerI18nDefault>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItaTE4bi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTkdCX0RBVEVQSUNLRVJfMThOX0ZBQ1RPUlkobG9jYWxlOiBhbnkpOiBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQ7XG4vKipcbiAqIEEgc2VydmljZSBzdXBwbHlpbmcgaTE4biBkYXRhIHRvIHRoZSBkYXRlcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIHNlcnZpY2UgdXNlcyB0aGUgQW5ndWxhciBsb2NhbGUgYW5kIHJlZ2lzdGVyZWQgbG9jYWxlIGRhdGEgZm9yXG4gKiB3ZWVrZGF5cyBhbmQgbW9udGggbmFtZXMgKGFzIGV4cGxhaW5lZCBpbiB0aGUgQW5ndWxhciBpMThuIGd1aWRlKS5cbiAqXG4gKiBJdCBhbHNvIHByb3ZpZGVzIGEgd2F5IHRvIGkxOG4gZGF0YSB0aGF0IGRlcGVuZHMgb24gY2FsZW5kYXIgY2FsY3VsYXRpb25zLCBsaWtlIGFyaWEgbGFiZWxzLCBkYXksIHdlZWsgYW5kIHllYXJcbiAqIG51bWVyYWxzLiBGb3Igb3RoZXIgc3RhdGljIGxhYmVscyB0aGUgZGF0ZXBpY2tlciB1c2VzIHRoZSBkZWZhdWx0IEFuZ3VsYXIgaTE4bi5cbiAqXG4gKiBTZWUgdGhlIFtpMThuIGRlbW9dKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzI2kxOG4pIGFuZFxuICogW0hlYnJldyBjYWxlbmRhciBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9jYWxlbmRhcnMjaGVicmV3KSBvbiBob3cgdG8gZXh0ZW5kIHRoaXMgY2xhc3MgYW5kIGRlZmluZVxuICogYSBjdXN0b20gcHJvdmlkZXIgZm9yIGkxOG4uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaG9ydCB3ZWVrZGF5IG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgaGVhZGluZyBvZiB0aGUgbW9udGggdmlldy5cbiAgICAgKlxuICAgICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICd3ZWVrZGF5JyBpcyAxPU1vbiAuLi4gNz1TdW4uXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0V2Vla2RheVNob3J0TmFtZSh3ZWVrZGF5OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2hvcnQgbW9udGggbmFtZSB0byBkaXNwbGF5IGluIHRoZSBkYXRlIHBpY2tlciBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBtb250aCBuYW1lIHRvIGRpc3BsYXkgaW4gdGhlIGRhdGUgcGlja2VyIG5hdmlnYXRpb24uXG4gICAgICpcbiAgICAgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIGZvciBhIHNwZWNpZmljIGRhdGUuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMi4wLjBcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF5IHRoYXQgaXMgcmVuZGVyZWQgaW4gYSBkYXkgY2VsbC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjAuMFxuICAgICAqL1xuICAgIGdldERheU51bWVyYWxzKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIHdlZWsgbnVtYmVyIHJlbmRlcmVkIGJ5IGRhdGVwaWNrZXIuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4wLjBcbiAgICAgKi9cbiAgICBnZXRXZWVrTnVtZXJhbHMod2Vla051bWJlcjogbnVtYmVyKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSB5ZWFyIHRoYXQgaXMgcmVuZGVyZWQgaW4gdGhlIGRhdGVwaWNrZXIgeWVhciBzZWxlY3QgYm94LlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMC4wXG4gICAgICovXG4gICAgZ2V0WWVhck51bWVyYWxzKHllYXI6IG51bWJlcik6IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuRGVmYXVsdCBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcbiAgICBwcml2YXRlIF9sb2NhbGU7XG4gICAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydDtcbiAgICBwcml2YXRlIF9tb250aHNTaG9ydDtcbiAgICBwcml2YXRlIF9tb250aHNGdWxsO1xuICAgIGNvbnN0cnVjdG9yKF9sb2NhbGU6IHN0cmluZyk7XG4gICAgZ2V0V2Vla2RheVNob3J0TmFtZSh3ZWVrZGF5OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZztcbiAgICBnZXRNb250aEZ1bGxOYW1lKG1vbnRoOiBudW1iZXIpOiBzdHJpbmc7XG4gICAgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmc7XG59XG4iXX0=