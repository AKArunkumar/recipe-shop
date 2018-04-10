import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../../service/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeservice: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  itemSelected() {
    // console.log(this.recipe);
    this.recipeservice.recipeSelected.emit(this.recipe);
  }

}
