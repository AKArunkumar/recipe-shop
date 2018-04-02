import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../service/shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingservice.getIngredients();
    this.shoppingservice.changeIngredientEvent
        .subscribe((chngdIngredients: Ingredient[]) => {
          this.ingredients = this.shoppingservice.getIngredients();
        });
    }
 
}
