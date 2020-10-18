import { EventEmitter } from '@angular/core';
import { NavigationEvent, MonthViewModel } from './datepicker-view-model';
import { NgbDate } from './ngb-date';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerNavigation {
    i18n: NgbDatepickerI18n;
    navigation: typeof NavigationEvent;
    date: NgbDate;
    disabled: boolean;
    months: MonthViewModel[];
    showSelect: boolean;
    prevDisabled: boolean;
    nextDisabled: boolean;
    selectBoxes: {
        years: number[];
        months: number[];
    };
    navigate: EventEmitter<NavigationEvent>;
    select: EventEmitter<NgbDate>;
    constructor(i18n: NgbDatepickerI18n);
    onClickPrev(event: MouseEvent): void;
    onClickNext(event: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerNavigation>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepickerNavigation, "ngb-datepicker-navigation", never, {
    "months": "months";
    "date": "date";
    "disabled": "disabled";
    "showSelect": "showSelect";
    "prevDisabled": "prevDisabled";
    "nextDisabled": "nextDisabled";
    "selectBoxes": "selectBoxes";
}, {
    "navigate": "navigate";
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItbmF2aWdhdGlvbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXZlbnQsIE1vbnRoVmlld01vZGVsIH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvbiB7XG4gICAgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG47XG4gICAgbmF2aWdhdGlvbjogdHlwZW9mIE5hdmlnYXRpb25FdmVudDtcbiAgICBkYXRlOiBOZ2JEYXRlO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIG1vbnRoczogTW9udGhWaWV3TW9kZWxbXTtcbiAgICBzaG93U2VsZWN0OiBib29sZWFuO1xuICAgIHByZXZEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBuZXh0RGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgc2VsZWN0Qm94ZXM6IHtcbiAgICAgICAgeWVhcnM6IG51bWJlcltdO1xuICAgICAgICBtb250aHM6IG51bWJlcltdO1xuICAgIH07XG4gICAgbmF2aWdhdGU6IEV2ZW50RW1pdHRlcjxOYXZpZ2F0aW9uRXZlbnQ+O1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPE5nYkRhdGU+O1xuICAgIGNvbnN0cnVjdG9yKGkxOG46IE5nYkRhdGVwaWNrZXJJMThuKTtcbiAgICBvbkNsaWNrUHJldihldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgb25DbGlja05leHQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xufVxuIl19