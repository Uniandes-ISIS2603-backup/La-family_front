import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../book/book.service';
import {Book} from '../../book/book';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html'
})
export class HomeContentComponent implements OnInit {


    /**
    * The component's constructor
    */
    constructor(private bookService: BookService, private route: ActivatedRoute) {}

    books:Book[];
    allbooks: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
                console.log("El tamaño es de: " + this.books.length)
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
            this.getBooks();
        }
    }


}