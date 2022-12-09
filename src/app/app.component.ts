import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from './recipes/recipes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auxillary-routes';
  sidenavToggle = false;
  showBackButton: boolean | undefined = undefined;

  @ViewChild('drawer') drawer: MatSidenav | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipesService) { }

  activated(event: Event) {
    console.log('db: activated', event);
    if (event.constructor.name === 'RecipeComponent') {
      this.showBackButton = true;
    }
  }

  deactivated(event: any) {
    console.log('db: deactivated', event.constructor.name);
    if (event.constructor.name === 'RecipeComponent') {
      this.showBackButton = false;
    }
  }

  deleteShoppingList() {
    // remove named route from URL
    this.router.navigate(['.', { outlets: { shopping: null } }], {
      relativeTo: this.route.parent
    });

    this.recipeService.clearShoppingList();
    this.drawer?.close();
  }

}
