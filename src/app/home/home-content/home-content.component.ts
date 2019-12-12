import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html'
})
export class HomeContentComponent implements OnInit {


    /**
    * The component's constructor
    */
    constructor(private route: ActivatedRoute) {}

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        
    }

}