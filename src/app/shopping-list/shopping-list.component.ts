import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: any = [];
  shoppingList$: Observable<string> | undefined;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    console.log("db: initializing shopping list");
    this.shoppingList$ = this.recipeService.shoppingList$.pipe(
      filter(item => item !== null),
      map(item => {
        if (!this.items.includes(item)) {
          this.items?.push(item);
        }
        return this.items;
      })
    );
  }

}
