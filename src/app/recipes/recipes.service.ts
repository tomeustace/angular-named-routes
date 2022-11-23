import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { allRecipes, Recipe } from '../recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  shoppingListSubject = new ReplaySubject<string | null>(50);
  shoppingList$ = this.shoppingListSubject.asObservable();

  constructor() { }

  getRecipes(): Recipe[] {
    return allRecipes;
  }

  getRecipeByName(name: string): Recipe {
    return allRecipes.filter((recipe: Recipe) => recipe.name === name)[0];
  }

  addListItem(item: string) {
    this.shoppingListSubject.next(item);
  }

  clearShoppingList() {
    this.shoppingListSubject.complete();
    this.shoppingListSubject = new ReplaySubject<string | null>(50);
    this.shoppingList$ = this.shoppingListSubject.asObservable();
  }
}
