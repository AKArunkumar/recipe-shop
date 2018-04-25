import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { RecipeService } from './recipe.service';
import { Recipe } from "../shared/recipe.model";

@Injectable() 
export class FirebaseService {
    constructor(private http: Http,
                private recipeservice: RecipeService) {

    }
    putRecipes() {
        return this.http.put('https://recipe-book-c6b58.firebaseio.com/recipes.json', this.recipeservice.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://recipe-book-c6b58.firebaseio.com/recipes.json')
                    .subscribe((recipes: Response) => {
                        console.log(recipes.json());
                        const getrecipes: Recipe[] = recipes.json();  
                        this.recipeservice.setRecipes(getrecipes);                        
                    })
    }

}
