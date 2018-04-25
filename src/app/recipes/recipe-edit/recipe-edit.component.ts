import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private recipeservice: RecipeService,
              private router: Router) { }

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
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {
        for (let ingrd of recipe.ingredients) {
          ingredientsArray.push(
            new FormGroup( {
              name: new FormControl(ingrd.name, Validators.required),
              amount: new FormControl(ingrd.amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*/)])
            })
          );
        }
      }
    }
    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients:  ingredientsArray
     });
  }
  addIngredient() {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup( {
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*/)])
      })
    );
  }
  onSubmit() {
      if (this.editRecipe) {
        this.recipeservice.updateRecipe(this.id, this.form.value);
      } else {
        this.recipeservice.addRecipe(this.form.value);
      }
      this.editRecipe = true;
    this.router.navigate([''], { relativeTo: this.route});       
  }
  onCancle() {
    this.editRecipe = true;    
    this.router.navigate([''], { relativeTo: this.route});
  }
}
