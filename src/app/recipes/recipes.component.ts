import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { allRecipes } from './../recipes';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {

  recipes = allRecipes;
  recipe: any;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipesService) {
    console.log("new route event");
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))  
        .subscribe((event) => {
          // code goes here...
          // console.log('db: tom', event);
          const recipeName = this.route.snapshot.paramMap.get('name');
          this.recipe = this.recipes.filter(r => r.name === recipeName)[0];
        });
  }

  ngOnInit(): void {
    // const recipeName = this.route.snapshot.paramMap.get('name');
    // console.log('db: recipeName', recipeName);
    // this.recipe = this.recipes.filter(r => r.name === recipeName)[0];
    // console.log('db: recipe', this.recipe);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('db: recipe change', changes);

  }

}
