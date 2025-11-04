import { Component, inject, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { LoadingBar } from '../../loading-bar';

@Component({
  selector: 'app-suppliers-delete',
  imports: [AsyncPipe, MaterialModule, RouterLink, LoadingBar],
  templateUrl: './suppliers-delete.html',
  styles: ``,
})
export class SuppliersDeleteComponent implements OnInit {

  private supplierService = inject(SupplierService)
  private route = inject(ActivatedRoute)
  private router = inject(Router) 

  supplier!: Supplier
  supplierObservable!: Observable<Supplier>

  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get('id')||0)
    this.supplierObservable = this.supplierService.getById(id)
    this.supplier = await lastValueFrom(this.supplierObservable)
  }

  async confirmDelete(){
    this.supplierObservable = this.supplierService.delete(this.supplier.id)
    await lastValueFrom(this.supplierObservable)
    this.router.navigate(['/suppliers'])
  }



}
