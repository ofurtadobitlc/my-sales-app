import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable, of } from 'rxjs';
import { SupplierService } from '../supplier.service';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-suppliers-new',
  imports: [MaterialModule, LoadingBar, SuppliersFormComponent, AsyncPipe],
  templateUrl: './suppliers-new.html',
  styles: ``,
})
export class SuppliersNewComponent {
  router = inject(Router)
  supplier: Supplier
  supplierObservable: Observable<Supplier>
  supplierService = inject(SupplierService)

  async ngOnInit(){
    this.supplierObservable = await of(this.supplierService.create())
    this.supplier = await lastValueFrom(this.supplierObservable)
    console.log('New Supplier created! ', this.supplier)
  }

  async onSave(supplier: Supplier){
    this.supplierObservable = this.supplierService.save(supplier)
    const result = await lastValueFrom(this.supplierObservable)
    console.log('That is my new Supplier now: ', result)
    this.router.navigate(['/suppliers/show/', result.id])
  }

  onBack() {
    this.router.navigate(['/suppliers'])
  }

}
