import { NgbProgressbarConfig } from './progressbar-config';
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbProgressbar {
    private _max;
    /**
     * The maximal value to be displayed in the progress bar.
     *
     * Should be a positive number. Will default to 100 otherwise.
     */
    set max(max: number);
    get max(): number;
    /**
     * If `true`, the stripes on the progress bar are animated.
     *
     * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
     */
    animated: boolean;
    /**
     * If `true`, the progress bars will be displayed as striped.
     */
    striped: boolean;
    /**
     * If `true`, the current percentage will be shown in the `xx%` format.
     */
    showValue: boolean;
    /**
     * Optional text variant type of the progress bar.
     *
     * Supports types based on Bootstrap background color variants, like:
     *  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
     *
     * @since 5.2.0
     */
    textType: string;
    /**
     * The type of the progress bar.
     *
     * Supports types based on Bootstrap background color variants, like:
     *  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
     */
    type: string;
    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     */
    value: number;
    /**
     * The height of the progress bar.
     *
     * Accepts any valid CSS height values, ex. `"2rem"`
     */
    height: string;
    constructor(config: NgbProgressbarConfig);
    getValue(): number;
    getPercentValue(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbProgressbar>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbProgressbar, "ngb-progressbar", never, {
    "value": "value";
    "max": "max";
    "animated": "animated";
    "striped": "striped";
    "textType": "textType";
    "type": "type";
    "showValue": "showValue";
    "height": "height";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuZC50cyIsInNvdXJjZXMiOlsicHJvZ3Jlc3NiYXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JQcm9ncmVzc2JhckNvbmZpZyB9IGZyb20gJy4vcHJvZ3Jlc3NiYXItY29uZmlnJztcbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBmZWVkYmFjayBvbiB0aGUgcHJvZ3Jlc3Mgb2YgYSB3b3JrZmxvdyBvciBhbiBhY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlByb2dyZXNzYmFyIHtcbiAgICBwcml2YXRlIF9tYXg7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltYWwgdmFsdWUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICpcbiAgICAgKiBTaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXIuIFdpbGwgZGVmYXVsdCB0byAxMDAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHNldCBtYXgobWF4OiBudW1iZXIpO1xuICAgIGdldCBtYXgoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHN0cmlwZXMgb24gdGhlIHByb2dyZXNzIGJhciBhcmUgYW5pbWF0ZWQuXG4gICAgICpcbiAgICAgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuICAgICAqL1xuICAgIGFuaW1hdGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHByb2dyZXNzIGJhcnMgd2lsbCBiZSBkaXNwbGF5ZWQgYXMgc3RyaXBlZC5cbiAgICAgKi9cbiAgICBzdHJpcGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGN1cnJlbnQgcGVyY2VudGFnZSB3aWxsIGJlIHNob3duIGluIHRoZSBgeHglYCBmb3JtYXQuXG4gICAgICovXG4gICAgc2hvd1ZhbHVlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsIHRleHQgdmFyaWFudCB0eXBlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICpcbiAgICAgKiBTdXBwb3J0cyB0eXBlcyBiYXNlZCBvbiBCb290c3RyYXAgYmFja2dyb3VuZCBjb2xvciB2YXJpYW50cywgbGlrZTpcbiAgICAgKiAgYFwic3VjY2Vzc1wiYCwgYFwiaW5mb1wiYCwgYFwid2FybmluZ1wiYCwgYFwiZGFuZ2VyXCJgLCBgXCJwcmltYXJ5XCJgLCBgXCJzZWNvbmRhcnlcImAsIGBcImRhcmtcImAgYW5kIHNvIG9uLlxuICAgICAqXG4gICAgICogQHNpbmNlIDUuMi4wXG4gICAgICovXG4gICAgdGV4dFR5cGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgICAqXG4gICAgICogU3VwcG9ydHMgdHlwZXMgYmFzZWQgb24gQm9vdHN0cmFwIGJhY2tncm91bmQgY29sb3IgdmFyaWFudHMsIGxpa2U6XG4gICAgICogIGBcInN1Y2Nlc3NcImAsIGBcImluZm9cImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwicHJpbWFyeVwiYCwgYFwic2Vjb25kYXJ5XCJgLCBgXCJkYXJrXCJgIGFuZCBzbyBvbi5cbiAgICAgKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICpcbiAgICAgKiBTaG91bGQgYmUgaW4gdGhlIGBbMCwgbWF4XWAgcmFuZ2UuXG4gICAgICovXG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICpcbiAgICAgKiBBY2NlcHRzIGFueSB2YWxpZCBDU1MgaGVpZ2h0IHZhbHVlcywgZXguIGBcIjJyZW1cImBcbiAgICAgKi9cbiAgICBoZWlnaHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE5nYlByb2dyZXNzYmFyQ29uZmlnKTtcbiAgICBnZXRWYWx1ZSgpOiBudW1iZXI7XG4gICAgZ2V0UGVyY2VudFZhbHVlKCk6IG51bWJlcjtcbn1cbiJdfQ==