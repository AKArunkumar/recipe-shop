import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  index: number;
  editMode = false;
  recipes: Recipe[];
  constructor(private recipeservice: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   this.recipes = this.recipeservice.getRecipes();
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

}
