import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDetail: Recipe;
  gotRecipeDetail: Recipe;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  this.recipeservice.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.gotRecipeDetail = recipe;
      } );
  }
}
