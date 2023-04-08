import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", 'Just a test', 'https://img.chefkoch-cdn.de/rezepte/881431193653493/bilder/965712/crop-642x428/brezen.jpg'),
  ];

}
