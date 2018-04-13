import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
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

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
