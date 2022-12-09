import { NgModule } from '@angular/core';
import { DefaultUrlSerializer, RouterModule, Routes, UrlSerializer, UrlTree } from '@angular/router';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export class CustomUrlSerializer extends DefaultUrlSerializer {

  /**
   * Replace () with / 
   * @param url 
   * @returns 
   */
  private customizeUrl(url: string): string {
    return url
      .replace('(', '/')
      .replace(')', '')
      .split('//').join('/');
  }


  override parse(url: string): UrlTree {
    const outUrl = super.parse(url);
    console.log('db: outUrl', outUrl);
    return outUrl;
  }
  override serialize(tree: UrlTree): string {
    return this.customizeUrl(super.serialize(tree));
  }
}

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: 'recipes' },
	{ path: "recipes", component: RecipeContainerComponent },
	{ path: "recipe/:name", component: RecipeComponent },
	{ path: "list", component: ShoppingListComponent, outlet: "shopping" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 