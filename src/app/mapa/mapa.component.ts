import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.html'
})
export class MapaComponent implements OnInit {


    /**
    * The component's constructor
    */
    constructor(private route: ActivatedRoute) {}

    

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        }

        
    }

