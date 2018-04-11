import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ShoppingService } from '../../service/shopping.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeShow: Recipe;
  id: number;
  constructor(private shoppingservice: ShoppingService,
              private recipeservice: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeShow = this.recipeservice.getRecipe(this.id);
        // console.log(this.recipeShow);
      }
    );
   }
   addtoShoppingList(ingredients: Ingredient[]) {
    this.shoppingservice.addsToIngredient(ingredients);
  }
}
