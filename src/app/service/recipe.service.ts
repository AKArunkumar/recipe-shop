import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipesGetEvent = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
        'A Test Recipe',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('foodOne', 3),
            new Ingredient('FoodTwo', 2)
        ]
    ),
        new Recipe(
        'B Test Recipe',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('foodThree', 2),
            new Ingredient('foodFour', 1)
        ]
    )
      ];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesGetEvent.next(this.recipes.slice());        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesGetEvent.next(this.recipes.slice());
        
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesGetEvent.next(this.recipes.slice());        
    }
    onDeleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesGetEvent.next(this.recipes.slice());
    }
}
