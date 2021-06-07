import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {BookDetailGuard} from '../../../app/book-detail.guard'
import {BookDetailComponent} from '../../book-detail/book-detail.component'
import {AuthguardService} from '../../Services/AuthGuardService/authguard.service'


@NgModule({
  declarations: [
     BookComponent, BookDetailComponent

  ],
  imports: [
    RouterModule.forChild([
      {path:'books',canActivate:[AuthguardService],component:BookComponent},
      {path:'book/:id',canActivate:[BookDetailGuard,AuthguardService],component:BookDetailComponent}
      
     
    ]),
    SharedModule
  ]
})
export class BookModule { }
