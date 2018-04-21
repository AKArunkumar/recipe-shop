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
    upadateIngredient(index: number, ingredient: Ingredient) {
        console.log(ingredient);
        this.ingredients[index] = ingredient;
        this.changeIngredientEvent.next(this.ingredients);
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.changeIngredientEvent.next(this.ingredients);
    }
}
