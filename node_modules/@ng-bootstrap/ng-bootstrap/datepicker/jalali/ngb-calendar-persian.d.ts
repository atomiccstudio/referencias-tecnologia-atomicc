import { NgbDate } from '../ngb-date';
import { NgbCalendar, NgbPeriod } from '../ngb-calendar';
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarPersian extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(): number[];
    getWeeksPerMonth(): number;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    isValid(date: NgbDate): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarPersian>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarPersian>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLXBlcnNpYW4uZC50cyIsInNvdXJjZXMiOlsibmdiLWNhbGVuZGFyLXBlcnNpYW4uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4uL25nYi1kYXRlJztcbmltcG9ydCB7IE5nYkNhbGVuZGFyLCBOZ2JQZXJpb2QgfSBmcm9tICcuLi9uZ2ItY2FsZW5kYXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiQ2FsZW5kYXJQZXJzaWFuIGV4dGVuZHMgTmdiQ2FsZW5kYXIge1xuICAgIGdldERheXNQZXJXZWVrKCk6IG51bWJlcjtcbiAgICBnZXRNb250aHMoKTogbnVtYmVyW107XG4gICAgZ2V0V2Vla3NQZXJNb250aCgpOiBudW1iZXI7XG4gICAgZ2V0TmV4dChkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgZ2V0UHJldihkYXRlOiBOZ2JEYXRlLCBwZXJpb2Q/OiBOZ2JQZXJpb2QsIG51bWJlcj86IG51bWJlcik6IE5nYkRhdGU7XG4gICAgZ2V0V2Vla2RheShkYXRlOiBOZ2JEYXRlKTogbnVtYmVyO1xuICAgIGdldFdlZWtOdW1iZXIod2VlazogcmVhZG9ubHkgTmdiRGF0ZVtdLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogbnVtYmVyO1xuICAgIGdldFRvZGF5KCk6IE5nYkRhdGU7XG4gICAgaXNWYWxpZChkYXRlOiBOZ2JEYXRlKTogYm9vbGVhbjtcbn1cbiJdfQ==