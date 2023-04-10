import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingEditComponent } from './shopping/list/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingList } from './shopping/list/list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/list/list.component';
import { RecipeDetailComponent } from './recipes/detail/detail.component';
import { RecipeItemComponent } from './recipes/list/item/item.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingEditComponent,
    HeaderComponent,
    ShoppingList,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
