import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { MaterialModule } from '../../material-module';
import { AsyncPipe } from '@angular/common';
import { LoadingBar } from '../../loading-bar';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form';

@Component({
  selector: 'app-suppliers-edit',
  imports: [MaterialModule, AsyncPipe, LoadingBar, SuppliersFormComponent],
  templateUrl: './suppliers-edit.html',
  styles: ``,
})
export class SuppliersEditComponent implements OnInit {
  route = inject(ActivatedRoute)
  router = inject(Router)
  supplierService = inject(SupplierService)
  supplier: Supplier
  supplierObservable: Observable<Supplier>

  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get("id") || 0)
    this.supplierObservable = this.supplierService.getById(id)
    this.supplier = await lastValueFrom(this.supplierObservable)

    console.log(this.supplier)
  }

  async onSave(supplier: Supplier){
    this.supplierObservable = this.supplierService.save(supplier)
    this.supplier = await lastValueFrom(this.supplierObservable)
    this.router.navigate(['/suppliers/show/', supplier?.id])
  }

  onBack() {
    this.router.navigate(['/suppliers'])
  }



}
