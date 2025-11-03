import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';

@Component({
  selector: 'app-suppliers-show',
  imports: [AsyncPipe, MaterialModule, LoadingBar, RouterLink],
  templateUrl: './suppliers-show.html',
  styles: ``,
})
export class SuppliersShowComponent implements OnInit{
  route = inject(ActivatedRoute)
  supplierService = inject(SupplierService)
  supplier: Supplier;
  supplierObservable: Observable<Supplier>

  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get("id") || 0) 
    this.supplierObservable = this.supplierService.getById(id)
    this.supplier = await lastValueFrom(this.supplierObservable)
    console.log(this.supplier)
  }

}
