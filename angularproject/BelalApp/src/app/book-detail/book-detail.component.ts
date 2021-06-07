import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { IBook } from '../BookStation/book/Book';
import { BookdataService } from '../Services/BookServices/bookdata.service';
import { IOldBook } from '../BookStation/book/Core/oldBook';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
book:IBook |undefined;
oldbook:IOldBook|undefined
books:IBook[]=[]
BookTitle ="Welcome To Book No"
sub:Subscription|undefined;
errorMess='';
price:number=19.99

  constructor(private route:ActivatedRoute,private router:Router,private bookservice:BookdataService) { }

  ngOnInit(): void {
//    const id=Number(this.route.snapshot.paramMap.get('id'));
  /*  const id=Number(this.route.snapshot.params['id']);

    this.sub= this.bookservice.GetbookbyID(id).subscribe(
      (data:IBook)=>this.book=data,
      (err:any)=>console.log("can't find book"),
      ()=>console.log("it's done book is getting")
      )*/
      const id=Number(this.route.snapshot.params['id']);
      this.sub=this.bookservice.GetAllbook().subscribe({
        next:books=>{
          this.books=books;
          this.book=this.getbookbyid(id);
          console.log(this.book)
        },
        error:err=>this.errorMess=err,
        complete:()=>console.log("all done"),
        

        })
        
    }
      
     
  
  ngOnDestroy():void
  {
this.sub?.unsubscribe();
  }
  getbookbyid(id:number)
  {
    return this.books.find(b=>b.id==id);
  }
  return() :void
  {
      this.router.navigate(['/books'])
  }


}
