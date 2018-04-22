import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editRecipe = false;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeservice: RecipeService) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
            this.editRecipe = params['id'] != null;
            this.initForm();
          }
        );
  }
  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let ingredientsArray = new FormArray([]);
    if (this.editRecipe) {
      const recipe = this.recipeservice.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.description;
      description = recipe.description;
      if (recipe['ingredients']) {
        for (let ingrd of recipe.ingredients) {
          ingredientsArray.push(
            new FormGroup( {
              name: new FormControl(ingrd.name),
              amount: new FormControl(ingrd.amount)
            })
          );
        }
      }
    }
    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagepath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients:  ingredientsArray
     });
  }
  addIngredient() {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup( {
        name: new FormControl(''),
        amount: new FormControl('')
      })
    );
  }
  onSubmit() {

  }

}
