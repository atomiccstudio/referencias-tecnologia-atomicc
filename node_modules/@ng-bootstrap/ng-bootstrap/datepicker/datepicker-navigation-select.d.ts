import { EventEmitter, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';
import { NgbDate } from './ngb-date';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerNavigationSelect implements AfterViewChecked {
    i18n: NgbDatepickerI18n;
    private _renderer;
    date: NgbDate;
    disabled: boolean;
    months: number[];
    years: number[];
    select: EventEmitter<NgbDate>;
    monthSelect: ElementRef;
    yearSelect: ElementRef;
    private _month;
    private _year;
    constructor(i18n: NgbDatepickerI18n, _renderer: Renderer2);
    changeMonth(month: string): void;
    changeYear(year: string): void;
    ngAfterViewChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerNavigationSelect>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepickerNavigationSelect, "ngb-datepicker-navigation-select", never, {
    "date": "date";
    "disabled": "disabled";
    "months": "months";
    "years": "years";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdC5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gICAgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG47XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XG4gICAgZGF0ZTogTmdiRGF0ZTtcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBtb250aHM6IG51bWJlcltdO1xuICAgIHllYXJzOiBudW1iZXJbXTtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxOZ2JEYXRlPjtcbiAgICBtb250aFNlbGVjdDogRWxlbWVudFJlZjtcbiAgICB5ZWFyU2VsZWN0OiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX21vbnRoO1xuICAgIHByaXZhdGUgX3llYXI7XG4gICAgY29uc3RydWN0b3IoaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4sIF9yZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBjaGFuZ2VNb250aChtb250aDogc3RyaW5nKTogdm9pZDtcbiAgICBjaGFuZ2VZZWFyKHllYXI6IHN0cmluZyk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQ7XG59XG4iXX0=