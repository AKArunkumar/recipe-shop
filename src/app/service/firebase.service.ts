import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { RecipeService } from './recipe.service';
import { Recipe } from "../shared/recipe.model";
import { AuthService } from '../auth/auth.service';

@Injectable() 
export class FirebaseService  {
    constructor(private http: Http,
                private recipeservice: RecipeService,
                private authservice: AuthService) {

    }
    putRecipes() {
        let tk = this.authservice.haveToken();   
        return this.http.put('https://recipe-book-c6b58.firebaseio.com/recipes.json?auth='+tk, this.recipeservice.getRecipes());
    }

    getRecipes() {
        let tk = this.authservice.haveToken();
        return this.http.get('https://recipe-book-c6b58.firebaseio.com/recipes.json?auth='+tk)
                    .subscribe((recipes: Response) => {
                        const getrecipes: Recipe[] = recipes.json();  
                        this.recipeservice.setRecipes(getrecipes);                        
                    })
    }

}
