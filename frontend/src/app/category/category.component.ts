import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/consumo-category/category.service';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';

declare var M: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ CategoryService ]
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.categoryService.categories = res as Category[];
    })
  }

  addCategory(form?: NgForm){
    console.log(form.value);
    if(form.value._id) {
      this.categoryService.putCategory(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getCategories();
          M.toast({html: 'Categoria actualizada'});
        });
    } else {
      this.categoryService.postCategory(form.value)
      .subscribe(res => {
        this.getCategories();
        this.resetForm(form);
        M.toast({html: 'Categoria guardada'});
      });
    }
  }

  editCategory(category: Category) {
    this.categoryService.selectedCategory = category;
  }

  deleteCategory(_id: string, form: NgForm) {
    if(confirm('Seguro que desea eliminar?')) {
      this.categoryService.deleteCategory(_id)
        .subscribe(res => {
          this.getCategories();
          this.resetForm(form);
          M.toast({html: 'Eliminado correctamente'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.categoryService.selectedCategory = new Category();
    }
  }

}
