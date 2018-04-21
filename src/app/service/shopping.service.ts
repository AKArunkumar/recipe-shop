import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { ReturnStatement } from '@angular/compiler';


export class ShoppingService {
    changeIngredientEvent = new Subject<Ingredient[]>();
    editIngredientEvent = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addToIngredient(ingredientName: Ingredient) {
        this.ingredients.push(ingredientName);
        this.changeIngredientEvent.next(this.ingredients);
    }
    addsToIngredient(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.changeIngredientEvent.next(this.ingredients);
    }
    editIngredient(index: number) {
        this.editIngredientEvent.next(index);
    }
}
