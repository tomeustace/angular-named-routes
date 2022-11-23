import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients: any;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void { }

  addItem(item: string) {
    console.log('db: addItem');
    this.recipeService.addListItem(item);
  }

}
