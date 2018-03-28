import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  @Output() itemWasSelectedEvent = new EventEmitter<Recipe>();
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeservice.getRecipes();
  }
  itemWasSelected(recipeDetail: Recipe) {
    this.itemWasSelectedEvent.emit(recipeDetail);
  }
}
