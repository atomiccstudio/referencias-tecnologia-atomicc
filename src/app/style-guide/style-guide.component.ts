import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-style-guide',
    templateUrl: './style-guide.component.html',
    styleUrls: ['./style-guide.component.scss']
})

export class StyleGuideComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
