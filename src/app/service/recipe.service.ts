import { Recipe } from '../shared/recipe.model';
import { EventEmitter, Output } from '@angular/core';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('B Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
