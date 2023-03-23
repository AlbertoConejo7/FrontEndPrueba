import { NgModule } from '@angular/core';
import { FacturaListComponent } from './factura-list.component';
import { FacturaDetailComponent } from './factura-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { FacturaDetailGuard } from './factura-detail.guard';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    FacturaListComponent,
    FacturaDetailComponent,
    //ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'facturas', component: FacturaListComponent },
      {
        path: 'facturas/:id',
        canActivate: [FacturaDetailGuard],
        component: FacturaDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class FacturaModule { }


