import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ShoppingService } from '../../service/shopping.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
   }
   addtoShoppingList(ingredients: Ingredient[]) {
    this.shoppingservice.addsToIngredient(ingredients);
  }
}
