import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Book} from '../../book/book';
import {BookService} from '../../book/book.service';
import { RtlScrollAxisType } from '@angular/cdk/platform';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() 
    books: Book[];

    /**
    * The component's constructor
    */
    constructor(private bookService: BookService, private route: ActivatedRoute) {}

    allbooks: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allbooks)
            .subscribe(params => {
                console.log(params);

                this.allbooks = params.allbooks;
                console.log(this.allbooks);
            });
        if (this.allbooks == 'yes') {
            console.log("allbooks");

            this.getBooks();
        }
    }

    checkName(name: String) {
        return name >= document.getElementById("nameToCheck").nodeValue;
      }
      
      
    filterBook() {
        let rta: Book[]=[];
        var i, td, txtValue, filter, input, count, j;
        j=0;
        input = document.getElementById("nameToCheck");
        filter = input.value.toUpperCase();
        if(filter=="" || filter==" ")
        {
            this.getBooks();
            return;
        }
        for (i = 0; i < this.books.length; i++) {
            td = this.books[i].name;
            if (td.toUpperCase().indexOf(filter) > -1) {
                console.log(this.books[i].name);
                //this.books.splice(i, 1);
                rta[j]= this.books[i];
                j++;
              } 
              else{
                  console.log(filter);
              }
          }
          this.books=rta;
      }
      
}
