import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material-module';
import { Supplier } from '../../supplier.dto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-supplier-card',
  imports: [MaterialModule, RouterLink],
  templateUrl: './supplier-card.html',
  styles: ``,
})
export class SupplierCard {
  @Input({ required: true }) supplier: Supplier
}
