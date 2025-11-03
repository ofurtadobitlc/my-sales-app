import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styles: ``,
})
export class CategoryFormComponent {
  private fb = inject(FormBuilder)

  @Output() back = new EventEmitter()
  @Output() save = new EventEmitter<Category>()

  categoryForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", Validators.required]
  })

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }


  onSubmit(){
    console.log('Submit from CategoryFormComponent', this.categoryForm.value)
    this.save.emit(this.categoryForm.value as Category)
  }

  onBack(){
    this.back.emit()
  }


}
