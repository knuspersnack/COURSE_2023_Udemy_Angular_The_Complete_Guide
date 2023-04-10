import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class RecipeDetailComponent {
  @Input() detail:Recipe;

  constructor(private recipeService: RecipeService){};

  onAddToShoppingList() {
    this.recipeService.addIntgredientToShoppingList(this.detail.ingredients);
  }
}
