import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  index: number;
  editMode = false;
  recipes: Recipe[];
  recipeGetSubscription = new Subscription();
  constructor(private recipeservice: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
   this.recipeGetSubscription = this.recipeservice.recipesGetEvent.subscribe(
     (recipes) => {
       this.recipes = recipes;
     }
   )
   this.route.params.subscribe(
     ( params: Params ) => {
        this.index = +params['id'];
        this.editMode = params['id'] != null;
     }
   );
  }
  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route} );
  }
  ngOnDestroy() {
    this.recipeGetSubscription.unsubscribe();
  }

}
