import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'shopping-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
  })
  export class ShoppingList {
    ingredients:Ingredient[] = [
      new Ingredient('Apples',5),
      new Ingredient('Tomatos',10),
    ];
  }
  