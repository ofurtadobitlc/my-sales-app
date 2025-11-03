import { Component, inject, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupplierCard } from './supplier-card/supplier-card';

@Component({
  selector: 'app-suppliers-list',
  imports: [MaterialModule, LoadingBar, AsyncPipe, RouterLink, SupplierCard],
  templateUrl: './suppliers-list.html',
  styles: ``,
})
export class SuppliersListComponent implements OnInit{
  supplierService = inject(SupplierService)

  suppliers!: Supplier[]
  supplierObservable!: Observable<Supplier[]>

  async ngOnInit(){
    this.supplierObservable = this.supplierService.getAll()
    this.suppliers = await lastValueFrom(this.supplierObservable)
  }



}
