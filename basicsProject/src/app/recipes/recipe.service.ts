import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingService: ShoppingService) {}

  recipeClicked = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Brezel',
      'From München',
      'https://img.chefkoch-cdn.de/rezepte/881431193653493/bilder/965712/crop-642x428/brezen.jpg',
      [new Ingredient('Egg', 4), new Ingredient('Salt', 1)]
    ),
    new Recipe(
      'Burger',
      'Made in the USA',
      'https://img.chefkoch-cdn.de/rezepte/881431193653493/bilder/965712/crop-642x428/brezen.jpg',
      [
        new Ingredient('Egg', 4),
        new Ingredient('Salt', 1),
        new Ingredient('Meat', 4),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //copy of array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIntgredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
