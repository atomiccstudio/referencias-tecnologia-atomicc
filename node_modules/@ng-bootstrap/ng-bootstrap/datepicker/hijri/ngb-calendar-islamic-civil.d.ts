import { NgbCalendarHijri } from './ngb-calendar-hijri';
import { NgbDate } from '../ngb-date';
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarIslamicCivil extends NgbCalendarHijri {
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     */
    fromGregorian(gDate: Date): NgbDate;
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     */
    toGregorian(hDate: NgbDate): Date;
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    getDaysPerMonth(month: number, year: number): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarIslamicCivil>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarIslamicCivil>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwuZC50cyIsInNvdXJjZXMiOlsibmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JDYWxlbmRhckhpanJpIH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXItaGlqcmknO1xuaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4uL25nYi1kYXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkNhbGVuZGFySXNsYW1pY0NpdmlsIGV4dGVuZHMgTmdiQ2FsZW5kYXJIaWpyaSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZXF1aXZhbGVudCBpc2xhbWljKGNpdmlsKSBkYXRlIHZhbHVlIGZvciBhIGdpdmUgaW5wdXQgR3JlZ29yaWFuIGRhdGUuXG4gICAgICogYGdEYXRlYCBpcyBhIEpTIERhdGUgdG8gYmUgY29udmVydGVkIHRvIEhpanJpLlxuICAgICAqL1xuICAgIGZyb21HcmVnb3JpYW4oZ0RhdGU6IERhdGUpOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVxdWl2YWxlbnQgSlMgZGF0ZSB2YWx1ZSBmb3IgYSBnaXZlIGlucHV0IGlzbGFtaWMoY2l2aWwpIGRhdGUuXG4gICAgICogYGhEYXRlYCBpcyBhbiBpc2xhbWljKGNpdmlsKSBkYXRlIHRvIGJlIGNvbnZlcnRlZCB0byBHcmVnb3JpYW4uXG4gICAgICovXG4gICAgdG9HcmVnb3JpYW4oaERhdGU6IE5nYkRhdGUpOiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgc3BlY2lmaWMgSGlqcmkgbW9udGguXG4gICAgICogYG1vbnRoYCBpcyAxIGZvciBNdWhhcnJhbSwgMiBmb3IgU2FmYXIsIGV0Yy5cbiAgICAgKiBgeWVhcmAgaXMgYW55IEhpanJpIHllYXIuXG4gICAgICovXG4gICAgZ2V0RGF5c1Blck1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IG51bWJlcjtcbn1cbiJdfQ==