import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingService {
    changeIngredientEvent = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addToIngredient(ingredientName: Ingredient) {
        this.ingredients.push(ingredientName);
        this.changeIngredientEvent.next(this.ingredients);
    }
    addsToIngredient(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.changeIngredientEvent.next(this.ingredients);
    }
}
