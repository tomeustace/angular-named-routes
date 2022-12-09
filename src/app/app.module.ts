import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, CustomUrlSerializer } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './recipes/ingredients/ingredients.component';
import { MethodComponent } from './recipes/method/method.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UrlSerializer } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    IngredientsComponent,
    MethodComponent,
    RecipeContainerComponent,
    RecipeComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [
    // { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
