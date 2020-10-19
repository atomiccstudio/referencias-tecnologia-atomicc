import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import getArrays from '../datasource/team';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    data;
    person:  string;
    team = getArrays['team'];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.person = this.route.snapshot.paramMap.get("person");
            this.data = this.team.find(item => {
                return item.key === this.person;
            });
        });
    }

}
