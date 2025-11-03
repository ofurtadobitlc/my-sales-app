import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../category.dto';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'category-form',
  imports: [
    MaterialModule,
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
