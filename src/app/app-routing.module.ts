import { NgModule } from '@angular/core';
import { DefaultUrlSerializer, RouterModule, Routes, UrlSerializer, UrlTree } from '@angular/router';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { NotesComponent } from './recipes/notes/notes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

class CustomUrlSerializer extends DefaultUrlSerializer {

  private _reverseUrl(url: string): string {
    console.log('db: reverseUrl', url);
    const startIndex = 1;
    const segmentString =   
      `(${url.substring(startIndex).split('/').join('//')})`;
    console.log('db: reverseUrl', url);
    const reverse = url.substring(0, startIndex) + segmentString;
    console.log('db: reverseUrl', reverse);
    return reverse;
  }

  private _beautifyUrl(url: string): string {
    return url
      .replace('(', '')
      .replace(')', '')
      .split('//').join('/');
  }

  override parse(url: string): UrlTree {
    const outUrl = super.parse(url);
    console.log('db: outUrl', outUrl);
    return outUrl;
  }

  override serialize(tree: UrlTree): string {
    const serialized = super.serialize(tree);
    return serialized;
  }
}

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: 'recipes' },
	{ path: "recipes", component: RecipeContainerComponent },
	{ path: "recipe/:name", component: RecipeComponent },
	{ path: "notes/:name", component: NotesComponent, outlet: "notes" },
	{ path: "list", component: ShoppingListComponent, outlet: "list" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ]
})
export class AppRoutingModule { }
 