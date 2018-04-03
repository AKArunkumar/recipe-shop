import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingService {
    changeIngredientEvent = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addToIngredient(ingredientName: Ingredient) {
        this.ingredients.push(ingredientName);
        this.changeIngredientEvent.emit(this.ingredients);
    }
    addsToIngredient(ingredients: Ingredient[]) {
        console.log('hi');
        this.ingredients.push(...ingredients);
        this.changeIngredientEvent.emit(this.ingredients);
    }
}
