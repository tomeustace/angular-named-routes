import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Event, ActivationStart } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Recipe } from 'src/app/recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  notes: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit(): void {
    // this.router.routerState.snapshot.
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof ActivationStart) {
    //       const rcp = event?.snapshot.params;
    //       // use observable and update template to use async
    //       const recipe: Recipe = this.recipeService.getRecipeByName(rcp['name']);
    //       this.notes = recipe.notes;
    //   }
    // });
    // this.route.params.pipe(
    //       tap((params: Params) => {
    //         console.log("name:", params)
    //       }),
    //       map((params: Params) => this.recipeService.getRecipeByName(params['name']))
    //     ).subscribe(recipe => this.notes = recipe.notes);
  }

}
