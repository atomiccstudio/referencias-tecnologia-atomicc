import { NgbDate } from '../ngb-date';
import { NgbCalendar, NgbPeriod } from '../ngb-calendar';
/**
 * @since 3.2.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarHebrew extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(year?: number): number[];
    getWeeksPerMonth(): number;
    isValid(date: NgbDate): boolean;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    /**
     * @since 3.4.0
     */
    toGregorian(date: NgbDate): NgbDate;
    /**
     * @since 3.4.0
     */
    fromGregorian(date: NgbDate): NgbDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarHebrew>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarHebrew>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWhlYnJldy5kLnRzIiwic291cmNlcyI6WyJuZ2ItY2FsZW5kYXItaGVicmV3LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JDYWxlbmRhciwgTmdiUGVyaW9kIH0gZnJvbSAnLi4vbmdiLWNhbGVuZGFyJztcbi8qKlxuICogQHNpbmNlIDMuMi4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkNhbGVuZGFySGVicmV3IGV4dGVuZHMgTmdiQ2FsZW5kYXIge1xuICAgIGdldERheXNQZXJXZWVrKCk6IG51bWJlcjtcbiAgICBnZXRNb250aHMoeWVhcj86IG51bWJlcik6IG51bWJlcltdO1xuICAgIGdldFdlZWtzUGVyTW9udGgoKTogbnVtYmVyO1xuICAgIGlzVmFsaWQoZGF0ZTogTmdiRGF0ZSk6IGJvb2xlYW47XG4gICAgZ2V0TmV4dChkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgZ2V0UHJldihkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgZ2V0V2Vla2RheShkYXRlOiBOZ2JEYXRlKTogbnVtYmVyO1xuICAgIGdldFdlZWtOdW1iZXIod2VlazogcmVhZG9ubHkgTmdiRGF0ZVtdLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogbnVtYmVyO1xuICAgIGdldFRvZGF5KCk6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogQHNpbmNlIDMuNC4wXG4gICAgICovXG4gICAgdG9HcmVnb3JpYW4oZGF0ZTogTmdiRGF0ZSk6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogQHNpbmNlIDMuNC4wXG4gICAgICovXG4gICAgZnJvbUdyZWdvcmlhbihkYXRlOiBOZ2JEYXRlKTogTmdiRGF0ZTtcbn1cbiJdfQ==