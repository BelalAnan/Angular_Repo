import { Component, OnInit } from '@angular/core';
import { IBook } from './Book';
import { Subscription } from 'rxjs';
import { BookdataService } from '../../Services/BookServices/bookdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  PageTitle="List of Books";
  imagewidth=100;
  imagemargin=2;
  sub:Subscription|undefined;
  errorMess='';
  isdisabled=false;
  

  books:IBook[]=[]
    

  
  constructor(private pservice:BookdataService,private router:Router) { }


  ngOnInit(): void {
 
    this.sub= this.pservice.GetAllbook().subscribe(
       (data:IBook[])=>this.books=data,
       (err:any)=>console.log(err),
       ()=>console.log('all done getting books')
     )
   
     
  }
  ngOnDestroy():void
  {
this.sub?.unsubscribe();
  }
  GetDetail() :void
  {
      this.router.navigate(['/bookdetail'])
  }
 
}
