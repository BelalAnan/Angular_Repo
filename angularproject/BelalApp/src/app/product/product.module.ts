import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '.././convert-to-spaces.pipe'
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from '../product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProducteditComponent } from '../productedit/productedit.component';
import { AuthguardService } from '../Services/AuthGuardService/authguard.service';
import { ProductcreateComponent } from '../productcreate/productcreate.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProducteditComponent,
    ProductcreateComponent
    
  ],
  imports: [
    RouterModule.forChild([
      {path:'products',canActivate:[AuthguardService],component:ProductlistComponent},
      {path:'products/:id',
      canActivate:[ProductDetailGuard,AuthguardService],
      component: ProductDetailComponent},
      {path:'prodedit/:id',
       canActivate:[AuthguardService],
      component:ProducteditComponent},
      {path:'productcreate',canActivate:[AuthguardService],component:ProductcreateComponent}
  
     
    ]),
    SharedModule
  ]
})
export class ProductModule { }
