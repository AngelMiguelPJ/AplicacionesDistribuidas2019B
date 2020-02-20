import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //variables
  selectedCategory: Category;
  categories: Category[];

  //Api
  readonly URL_API = 'http://localhost:3000/api/categories';

  constructor(private http: HttpClient) { 
    this.selectedCategory = new Category();
  }

  //metodos
  postCategory(category: Category){
    return this.http.post(this.URL_API, category);
  }

  getCategories(){
    return this.http.get(this.URL_API);
  }

  putCategory(category: Category){
    return this.http.put(this.URL_API + `/${category._id}`, category);
  }

  deleteCategory(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
