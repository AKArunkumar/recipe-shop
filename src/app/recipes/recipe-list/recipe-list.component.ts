import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeservice.getRecipes();
  }

}
