import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ShoppingList implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsUpdated.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

}
