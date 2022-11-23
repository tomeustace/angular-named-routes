import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { allRecipes, Recipe } from '../recipes';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes = allRecipes;
  recipe: Recipe | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("new route event");
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))  
        .subscribe((event) => {
          const recipeName = this.route.snapshot.paramMap.get('name');
          this.recipe = this.recipes.filter((r: { name: string | null; }) => r.name === recipeName)[0];
        });
  }

  ngOnInit(): void {
  }

}
