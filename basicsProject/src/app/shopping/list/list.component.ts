import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ShoppingList implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private changeSub: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.changeSub = this.shoppingService.ingredientsUpdated.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.changeSub.unsubscribe();
  }


}
