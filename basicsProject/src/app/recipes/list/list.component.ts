import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){};

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
